import click

@click.command()
@click.option('--language', type=click.Choice(['node', 'python']), required=True, help='Programming language')
def run(language):
   click.echo(f'Running pipeline for {language}')
   pipeline = click.prompt('Choose a pipeline', type=click.Choice(['Basic CI/CD', 'Advanced CI/CD'], case_sensitive=False))
   click.echo(f'Running {pipeline} pipeline for {language}...')

if __name__ == '__main__':
    run()