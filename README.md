<p >This is a basic demo project using Odata API (SharePoint uses Odata 2.0) to get data (posting data is similar and reference can be found in the links below.)</p>
    <p >This uses the Vue composition API structure and binds asynchronous API call data to the view model using Pinia state management.</p>
    For this demo, I am using an Odata open API (see the HelloWorld.vue onMounted hook) for a an axios get command.  <br />
    Functionaly, SharePoint API follows Odata 2.0 spec found <a href="https://www.odata.org/documentation/odata-version-2-0/">here</a>.<br />
    In practice, in the local development environment, you will need to use a proxy service locally to be able to avoid cross-site-scripting issues. <br />
    This <a href="https://github.com/koltyakov/sp-rest-proxy">Proxy</a>  works well.<br /><br />

  <p>
        This project setup:<br /><br />
        npm init vite@latest spofvue --template vue<br />
        select the vue template<br />
        select the javascript variant<br />
        <br />
        install basic quasar:<br />
        npm install quasar @quasar/extras<br />
        npm install -D @quasar/vite-plugin sass@1.32.12<br />
        <br />
        install pinia: npm install pinia
        <br />
        install axios: npm install axios
        <br />
      </p>
      
       You can find Microsoft SharePoint REST API documentation <a href="https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/working-with-lists-and-list-items-with-rest">here</a><br /><br />
      Common Odata API endpoints for SharePoint:<br />
      <span class="text-deep-orange">_api/web/lists/GetByTitle('List Title')</span> (gets information about the list)<br />
      <span class="text-deep-orange">_api/web/lists/GetByTitle('List Title')/fields</span> (gets schema data about the list structure - 
      I use this data to inject into the view model dynamically, so extensive TypeScript definitions of the schema in code are not required)<br />
      <span class="text-deep-orange">_api/web/lists/GetByTitle('List Title')/items</span> (gets actual data from the list, think of this as a data table in a database server) <br /><br />
      Once you have the data in the view model, then it can be interacted with and mutated (if needed) and then POST back to SharePoint.<br />
