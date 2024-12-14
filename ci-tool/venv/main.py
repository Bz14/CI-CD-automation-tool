import subprocess
import click

@click.group()
def cli():
    """A CLI tool for running CI/CD workflows."""
    pass

@click.command()
@click.option('--path', default=".", help="Path to the Node.js application.")
def node(path):
    """Run the Node.js workflow."""
    click.echo(f"Executing Node.js Workflow for project at: {path}")
    
    try:
        click.echo("Installing dependencies...")
        subprocess.run(["npm", "install"], cwd=path, check=True)
        
        click.echo("Running tests...")
        try:
            subprocess.run(["npm", "test"], cwd=path, check=True)
        except subprocess.CalledProcessError:
            click.echo("No tests found or tests failed.")

        click.echo("Starting the application...")
        subprocess.run(["npm", "start"], cwd=path, check=True)
        
        click.echo("Node.js Workflow completed successfully.")
    except subprocess.CalledProcessError as e:
        click.echo(f"Workflow failed with error: {e}")
    except Exception as e:
        click.echo(f"Unexpected error: {e}")

cli.add_command(node)

if __name__ == "__main__":
    cli()
