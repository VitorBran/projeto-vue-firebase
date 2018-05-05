<template>
  <div>
    <h2>Lista de Alunos</h2>

    <table class="table">
      <thead>
        <th>
          <input type="text" class="form-control" v-model="search" placeholder="Pesquisar alunos">
        </th>
      </thead>
      <tbody>
        <tr v-for="membership in filteredMemberships">
          <td>
            <router-link v-bind:to="'/membership/' + membership.id">
              {{membership.name}}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberships: [],
      search: ''
    }
  },
  created() {
    this.$http.get('https://gym-membership-list.firebaseio.com/memberships.json').then(function(data) {
      return data.json();
    }).then(function(data) {
      var membershipsArray = [];

      for(let key in data) {
        data[key].id = key;
        membershipsArray.push(data[key]);
      }
      this.memberships = membershipsArray.sort(
        function(a, b){
          var x = a.name.toLowerCase();
          var y = b.name.toLowerCase();
          if (x < y) {return -1;}
          if (x > y) {return 1;}
          return 0;
        }
      );
    });
  },
  computed: {
    filteredMemberships: function() {
      return this.memberships.filter((membership) => {
        return membership.name.match(this.search);
      });
    }
  }
}
</script>

<style scoped>
.add-button-area {
  padding: 12px;
}

button:hover {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
}
</style>
