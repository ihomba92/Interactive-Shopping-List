import argparse
import json
import os
#from Third-party libraries
from rich.console import Console
from rich.table import Table
from rich.panel import Panel
from rich.text import Text

DB_FILE = "data.json"
console = Console()

# OOP Principles:
#this is the base class which demonstrate inheritance and encpsulation.
class Person:
    def __init__(self, name):
        self._name = name
    @property
    def name(self):
        return self._name
    @name.setter
    def name(self, value):
        if not value or not value.strip():
            raise ValueError("Name cannot be empty")
        self._name = value.strip()
    

#Data models
#Class-level registry to store users and projects in memory for simplicity
class User(Person):
    registry = {}
    VALID_ROLES = {"admin", "developer", "lead"}

    def __init__(self, username, role="developer"):
        super().__init__(username)
        self.role = role
        User.registry[self.username] = self
        self.projects = []

    @property
    def username(self):
        return self._name
    
    @property
    def role(self):
        return self._role
    
    @role.setter
    def role(self, new_role):
        if new_role not in self.VALID_ROLES:
            raise ValueError(f"Invalid role: {new_role}. Valid roles are: {', '.join(self.VALID_ROLES)}")
        self._role = new_role

    @classmethod
    def create(cls, username, role="developer"):
        if username in cls.registry:
            raise ValueError(f"User {username} already exists")
        return cls(username, role)
    
    @classmethod
    def get(cls, username):
        return cls.registry.get(username)
    
    def to_dict(self):
        return {
            "username": self.username,
            "role": self.role,
            "projects": [project.name for project in self.projects]
        }

    def __repr__(self):
        return f"<User: {self.username}, Role: {self.role.capitalize()}>"
    
class Task:
    _id_counter = 1
    registry = {}
    def __init__(self, title, task_id=None, is_completed=False):
        if task_id is not None:
            self._id = task_id 
            if task_id >= Task._id_counter:
                Task._id_counter = task_id + 1
        else:           
            self._id = Task._id_counter
            Task._id_counter += 1

        self.title = title
        self._is_completed = is_completed
        self.contributors = []
        Task.registry[self.id] = self

    @property
    def id(self):
        return self._id
    @property
    def title(self):
        return self._title
    
    @title.setter
    def title(self, value):
        if not value or not value.strip():
            raise ValueError("Task title cannot be empty")
        self._title = value.strip()
        
    @property
    def is_completed(self):
        return self._is_completed

    @classmethod
    def create(cls, title):
        return cls(title)
    
    @classmethod
    def get(cls, task_id):
        return cls.registry.get(task_id)
    
    def add_contributor(self, user):
        if user not in self.contributors:
            self.contributors.append(user)

    def mark_complete(self):
        self._is_completed = True
    
    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "is_completed": self.is_completed,
            "contributors": [contributor.username for contributor in self.contributors]
        }

class Project:    
    registry = {}

    def __init__(self, name, owner):
        self.name = name
        self.owner = owner
        self.tasks = []
        owner.projects.append(self)
        Project.registry[name] = self
    
    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        if not value or not value.strip():
            raise ValueError("Project name cannot be empty")
        self._name = value.strip()

    @classmethod
    def create(cls, name, owner_username):
        if name in cls.registry:
            raise ValueError(f"Project {name} already exists")
        
        owner = User.get(owner_username)
        if not owner:
            raise ValueError(f"User {owner_username} does not exist")
        return cls(name, owner)

    @classmethod
    def get(cls, name):
        return cls.registry.get(name)

    def add_task(self, task):
        self.tasks.append(task)

    def add_task(self, task_title, contributor_usernames=None):
        task = Task.create(task_title)
        if contributor_usernames:
            for username in contributor_usernames:
                user = User.get(username)
                if user:
                    task.add_contributor(user)
        self.tasks.append(task)
        return task
    def to_dict(self):
        return {
            "name": self.name,
            "owner": self.owner.username,
            "tasks": [task.to_dict() for task in self.tasks]
        }
def load_data():
    if not os.path.exists(DB_FILE):
        return
    try:
        with open(DB_FILE,"r") as f:
            data = json.load(f)
            User.registry.clear()
            Project.registry.clear()
            Task.registry.clear()
            Task._id_counter = 1
            for user_data in data.get("users", []):
                User.create(user_data["username"], user_data["role"])
            for project_data in data.get("projects", []):
                owner_username = User.get (project_data["owner"])
                if not owner_username:
                    continue
                project = Project.create(project_data["name"], owner_username.username)
                for task_data in project_data.get("tasks", []):
                    task = Task(task_data["title"], task_id=task_data["id"], is_completed=task_data["is_completed"])
                    for contributor_username in task_data.get("contributors", []):
                        contributor = User.get(contributor_username)
                        if contributor:
                            task.add_contributor(contributor)
                    project.tasks.append(task)
    except (json.JSONDecodeError, KeyError, TypeError) as e:
        console.print(f"[red]Error loading data: {e}[/red]")
    except Exception as e:
        console.print(f"[red]Unexpected error loading data: {e}[/red]")
def save_data():
    data = {
        "users": [user.to_dict() for user in User.registry.values()],
        "projects": [project.to_dict() for project in Project.registry.values()]
    }
    try:
        with open(DB_FILE, "w") as f:
            json.dump(data, f, indent=4)
    except IOError as e:
        console.print(f"[red]Error saving data: {e}[/red]")
    except Exception as e:
        console.print(f"[red]Unexpected error saving data: {e}[/red]")

#UI Rendering Helper using "Rich" library
def render_project(project):
    table = Table(title=f"Project: {project.name} (Owner: {project.owner.username})")
    table.add_column("Task ID", justify="center")
    table.add_column("Title", justify="left")
    table.add_column("Status", justify="center")
    table.add_column("Contributors", justify="left")

    for task in project.tasks:
        status = "[green]Completed[/green]" if task.is_completed else "[yellow]Pending[/yellow]"
        contributors = ", ".join([contributor.username for contributor in task.contributors]) or "None"
        table.add_row(str(task.id), task.title, status, contributors)

    console.print(table)



#CLI commands handlers

def handle_add_user(args):
    try:
        user = User.create(args.username, args.role)
        save_data()
        console.print(f"[bold green]✔ Success:[/bold green] Created user [bold cyan]{user.username}[/bold cyan] as [yellow]{user.role}[/yellow].")
    except ValueError as e:
        console.print(f"[red]Error:[/red] {e}")

def handle_add_project(args):
    try:
        project = Project.create(args.name, args.owner)
        save_data()
        console.print(f"[bold green]✔ Success:[/bold green] Created project [bold cyan]{project.name}[/bold cyan] owned by [yellow]{project.owner.username}[/yellow].")
    except ValueError as e:
        console.print(f"[red]Error:[/red] {e}")

def handle_add_task(args):
    try:
        project = Project.get(args.project)
        if not project:
            console.print(f"[red]Error:[/red] Project {args.project} does not exist")
            return
        task = project.add_task(args.title, args.contributors)
        save_data()
        console.print(f"[bold green]✔ Success:[/bold green] Added task [bold cyan]{task.title}[/bold cyan] to project [yellow]{project.name}[/yellow].")
    except ValueError as e:
        console.print(f"[red]Error:[/red] {e}")

def handle_list_projects(args):
    if args.user:
        user = User.get(args.user)
        if not user:
            console.print(f"[red]Error:[/red] User {args.user} does not exist")
            return
        console.print(f"\n[bold reverse blue]  Showing projects for user: {user.username}  [/bold reverse blue]\n")
        if not user.projects:
            console.print(f"[yellow]No projects found for user {user.username}.[/yellow]")
            return
        for project in user.projects:
            render_project(project)
    else:
        console.print("Listing all projects")
        if not Project.registry:
            console.print("[yellow]No projects found.[/yellow]")
            return
        for project in Project.registry.values():
            render_project(project)



def handle_complete_task(args):
    task = Task.get(args.task_id)
    if not task:
        console.print(f"[red]Error:[/red] Task {args.task_id} does not exist")
        return
    task.mark_complete()
    save_data()
    console.print(f"[green]Success:[/green] Marking task {args.task_id} as complete")

#CLI Stepup and main Routing Execution
def main(): 
    load_data()
    parser = argparse.ArgumentParser(description="Task Management CLI")
    #Create a subparser for each subcommand
    subparsers = parser.add_subparsers(required=True, help="Available commands", dest="command")

    # Add user command
    add_user_parser = subparsers.add_parser("add-user", help="Add a new user")
    add_user_parser.add_argument("username", type=str)
    add_user_parser.add_argument("--role", help="Role of the user (default: user)", type=str, choices=["admin", "developer", "lead"], default="developer")
    add_user_parser.set_defaults(func=handle_add_user)

    # Add project command
    add_project_parser = subparsers.add_parser("add-project", help="Add a new project")
    add_project_parser.add_argument("name", type=str)
    add_project_parser.add_argument("--owner", help="Username of the project owner", type=str)
    add_project_parser.set_defaults(func=handle_add_project)

    # Add task command
    add_task_parser = subparsers.add_parser("add-task", help="Add a new task")
    add_task_parser.add_argument("title", help="Title of the task to add", type=str)
    add_task_parser.add_argument("--project", help="Name of the project to which the task belongs", type=str)
    add_task_parser.add_argument("--contributors", nargs="+", help="List of usernames of task contributors", type=str)
    add_task_parser.set_defaults(func=handle_add_task)

    # List projects command
    list_projects_parser = subparsers.add_parser("list-projects", help="List projects")
    list_projects_parser.add_argument("--user", help="List projects for a specific user", type=str)
    list_projects_parser.set_defaults(func=handle_list_projects)

    # Complete task command
    complete_task_parser = subparsers.add_parser("complete-task", help="Mark a task as complete")
    complete_task_parser.add_argument("task_id", help="ID of the task to mark as complete", type=int)
    complete_task_parser.set_defaults(func=handle_complete_task)

    args = parser.parse_args()
    args.func(args)

if __name__ == "__main__":
    main()
