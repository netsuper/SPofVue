<p >This is a basic demo project using Odata API (SharePoint uses Odata 2.0) to get data (posting data is similar and reference can be found in the links below.)</p>
    <p >This uses the Vue composition API structure and binds asynchronous API call data to the view model using Pinia state management.</p>
    For this demo, I am using an Odata open API (see the HelloWorld.vue onMounted hook) for a an axios get command.  <br />
    Functionaly, SharePoint API follows Odata 2.0 spec found <a href="https://www.odata.org/documentation/odata-version-2-0/">here</a>.<br />
    In practice, in the local development environment, you will need to use a proxy service locally to be able to avoid cross-site-scripting issues. <br />
    This <a href="https://github.com/koltyakov/sp-rest-proxy">Proxy</a>  works well.<br /><br />
