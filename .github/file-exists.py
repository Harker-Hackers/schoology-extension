from json import loads
from os import strerror
from os.path import isfile
from errno import ENOENT

manifest = loads(
    open(
        'manifest.json', 
        'r'
    ).read()
)

def check_if_exists(filename):
    if not isfile(
        filename
    ):
        raise(
            FileNotFoundError(
                ENOENT, 
                strerror(
                    ENOENT
                ), 
                filename
            )
        )
    else:
        print(
            filename + ' exists.'
        )

for item in manifest['browser_action']:
    filename = manifest['browser_action'][item]
    check_if_exists(filename)

for content_script in manifest['content_scripts']:
    if 'js' in list(
        content_script.keys()
    ):
        for file in content_script['js']:
            check_if_exists(file)

if 'background' in list(
    manifest.keys()
):
    if 'scripts' in manifest['background']:
        for file in manifest['background']['scripts']:
            check_if_exists(file)