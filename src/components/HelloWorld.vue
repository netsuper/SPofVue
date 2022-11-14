<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
// Pinia
import { useModel } from '../store/model'

defineProps({
  msg: String
})
// store
const model = useModel()

onMounted(async () => {
  // clear the console
  console.clear()
  // call axios get function to return data set
  let result = await axios.get('https://services.odata.org/TripPinRESTierService/(S(guv40ex4rlilkcguyikgcjlv))/People')
  // using pinia store, take the data retrieved and push it into the model
  model.data = result.data.value
  // output to the console
  console.log(model.data)
})
</script>

<template>
  <div class="q-ma-lg">
    <h4>{{ msg }}</h4>
    <p >This is a basic demo project using Odata API (SharePoint uses Odata 2.0) to get data (posting data is similar and reference can be found in the links below.)</p>
    <p >This uses the Vue composition API structure and binds asynchronous API call data to the view model using Pinia state management.</p>
    For this demo, I am using an Odata open API (see the HelloWorld.vue onMounted hook) for a an axios get command.  <br />
    Functionaly, SharePoint API follows Odata 2.0 spec found <a href="https://www.odata.org/documentation/odata-version-2-0/">here</a>.<br />
    In practice, in the local development environment, you will need to use a proxy service locally to be able to avoid cross-site-scripting issues. <br />
    This <a href="https://github.com/koltyakov/sp-rest-proxy">Proxy</a>  works well.<br /><br />

    <br />
    
    <div class="card">
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
    </div>
    <p>
      You can find Microsoft SharePoint REST API documentation <a href="https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/working-with-lists-and-list-items-with-rest">here</a><br /><br />
      Common Odata API endpoints for SharePoint:<br />
      <span class="text-deep-orange">_api/web/lists/GetByTitle('List Title')</span> (gets information about the list)<br />
      <span class="text-deep-orange">_api/web/lists/GetByTitle('List Title')/fields</span> (gets schema data about the list structure - 
      I use this data to inject into the view model dynamically, so extensive TypeScript definitions of the schema in code are not required)<br />
      <span class="text-deep-orange">_api/web/lists/GetByTitle('List Title')/items</span> (gets actual data from the list, think of this as a data table in a database server) <br /><br />
      Once you have the data in the view model, then it can be interacted with and mutated (if needed) and then POST back to SharePoint.<br />

      For example: a common create POST:<br /><br />

      https://{site_url}/_api/web/lists/GetByTitle('List Title')/items<br />
      header:<br />
        {Accept: "application/json;odata=verbose",<br />
        Content-Type: "application/json;odata=verbose",<br />
        X-RequestDigest: "{form_digest_value}"}<br />

      body:<br />
        {<br />
          "__metadata": {<br />
            "type": "SP.Data.TestListItem"<br />
          },<br />
          "Title": "Test"<br />
        }<br />

        Specifying an ID in the items endpoint (_api/web/lists/GetByTitle('List Title')/items(id)) allows for updating or deleting a record.   
        Refer to link above for these scenarios.
    </p>

    <p> data retrieved from the open API axios get function:</p>
    <!-- {{model.data}} -->
    <table class="q-ma-lg" style="border-collapse:collapse">
      <tr class="text-primary" >
        <th class="q-ma-md" v-for="(c,ci) of model.headers">
          {{c}}
        </th>
      </tr>
      <tr v-for="(r,ri) of model.data">
        <td   v-for="(c,ci) of model.headers">
        {{r[c]}}
        </td>
      </tr>
    
    </table>
    John 3:16: For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.<br />
    Scott Hickerson 11/13/2022
  </div>
</template>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

p {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
}
</style>