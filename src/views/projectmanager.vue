<template>
    <v-container class="" fluid>
        <v-card class=" pa-3">
            <v-card-title>
      모든 프로젝트
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="projects"
      :search="search"
    ></v-data-table>
        </v-card>
        
    </v-container>
</template>

<script>
export default {
    name: 'PjmanaGridsystem',

    data() {
        return {
            search: '',
        headers: [
          {
            text: '프로젝트 제목',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: '프로젝트 번호', value: 'num' },
          { text: '프로젝트 완료여부', value: 'done' },
        ],
        projects:[
            {name:'프로젝트1',num:'101',done:'미완료'},
            {name:'프로젝트2',num:'102',done:'미완료'},
            {name:'프로젝트3',num:'103',done:'미완료'},
            {name:'프로젝트4',num:'104',done:'완료'},
            {name:'프로젝트5',num:'105',done:'완료'},
            {name:'프로젝트6',num:'106',done:'완료'},
            {name:'프로젝트7',num:'107',done:'완료'},
            {name:'프로젝트8',num:'108',done:'완료'},
            {name:'프로젝트9',num:'109',done:'완료'},
            {name:'프로젝트10',num:'110',done:'완료'},
            {name:'프로젝트11',num:'111',done:'완료'},
            {name:'프로젝트12',num:'112',done:'완료'},
            {name:'프로젝트13',num:'113',done:'완료'},
            {name:'프로젝트14',num:'114',done:'완료'},
            {name:'프로젝트15',num:'115',done:'완료'},
            {name:'프로젝트16',num:'116',done:'완료'},
            {name:'프로젝트17',num:'117',done:'완료'},
            {name:'프로젝트18',num:'118',done:'완료'},
            {name:'프로젝트19',num:'119',done:'완료'},

        ]
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>