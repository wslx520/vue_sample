<template>
  <div class="table-wrap">
      <table class="table">
          <thead>
              <tr>
                  <th colspan="3">Table2</th>
              </tr>
              <tr>
                  <th>ID</th>
                  <th><span @click="order" class="order">Name</span></th>
                  <th>Gender</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="row in rows" :key="row.id">
                  <td>{{row.id}}</td>
                  <td><a :href="row.url" target="_blank">{{row.name}}</a></td>
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
                {name:'clee2',id:2,gender: 0,url:'http://baidu.com'},
                {name:'blees',id:3,gender: 1,url:'http://1.cn'},
                {name:'axlee',id:1,gender: 1,url:'http://g.cn'},
            ]
        }
    },
    methods: {
        order() {
            this.rows.sort((a, b) => a.name > b.name);
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
    .table-wrap {
        width: 50%;
    }
    .table {
        width: 100%;
        td, th {
            border: 1px solid #789abc;
        }
        .order {
            font-weight: 700;
            color: blue;
            cursor: pointer;
        }
    }
</style>