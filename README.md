# Elixir

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Server Updating
    As of now the portal pulls updates with every new build of docker from https://gitlab.fi.muni.cz/xpalco/elixir_build,
    To update server:<br>
    1. run "ng build --prod" in the project <br>
    2. push the build located in dist to https://gitlab.fi.muni.cz/xpalco/elixir_build<br>
    3. go to bio-portal.metacentrum.cz and "cd /home/workspace/elixir/"<br>
    4. build the new container "docker build . -t elixir_portal:latest --no-cache" (no cache so that it pulls all updates from repositories)<br>
    5. kill the old container<br>
        - docker ps (copy the container id)<br>
        - docker stop <id><br>
        - docker rm <id><br>
    6. run the new container "docker run -p 80:80 elixir_portal:latest"<br>

## State
    Baseline funcionality done
