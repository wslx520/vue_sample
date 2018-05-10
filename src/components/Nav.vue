<template>
  <nav>
    <ul>
        <li><router-link to="/table1">表格1</router-link></li>    
        <li><router-link to="/table2">表格2</router-link></li>    
    </ul>  
  </nav>
</template>

<style lang="scss">
  nav {
    li {
      list-style: none;
      display: inline-block;
      a.router-link-active {
        color: #f00;
      }
    }
  }
</style>
