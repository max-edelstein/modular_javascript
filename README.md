# modular_javascript

 How to use .mjs files aka modular javascript files

 See this documentation
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

Beware of cacheing issues, always use an private/incognito tab so no cacheing occurs.

## Starting

    $ npm init

    Because .mjs is still experimental, you must use a Webserver to run it. Running in the browsers using local files will not work due to this issue.

    Install http-server globally

    $ npm install http-server -g

    Start the web server without javascript cacheing

    $ http-server . -c-1

    Then goto http://127.0.0.1:8080/

    Beware of javascript cacheing, better open a private window/tab
