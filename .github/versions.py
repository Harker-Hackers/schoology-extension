from requests import get
from json import loads

manifest_release = loads(
    open(
        'manifest.json',
        'r'
    ).read()
)['version']

api_release = get(
    'https://api.github.com/repos/Harker-Hackers/grades-trend-visualizer/releases'
).json()[0]['name']

if manifest_release != api_release:
    raise(
        'Version from manifest ({}) not matching GitHub version ({}).'.format(
            manifest_release,
            api_release
        )
    )
else:
    print(
        'Versions matching and up to date. ({})'.format(
            api_release
        )
    )