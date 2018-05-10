<template>
    <div>
        <h3>Table1</h3>
        <table class="table">
            <thead>
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row in rows">
                    <td>{{row.id}}</td>
                    <td>{{row.name}}</td>
                    <td>{{row.gender | gender}}</td>
                </tr>
            </tbody>
        </table>
    </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              rows: [
                  {name:'xlee',id:1,gender: 1},
                  {name:'xlee2',id:2,gender: 0},
                  {name:'xlees',id:3,gender: 1},
              ]
          }
      },
      filters: {
          gender(type) {
              return type == 1 ? 'Male' : 'Female';
          }
      }
  }
  </script>
  
  <style lang="scss">
      .table {
          td, th {
              border: 1px solid #789abc;
          }
      }
  </style>