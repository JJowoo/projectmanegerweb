<template>
    <v-container fluid>
        <v-card class="pa-3">
            <table border="1" cellspacing="0" width="100%">
                <tr width="90%" align="center">
                    <td width="10%">프로젝트1</td>
                    <td >프로젝트1의 세부사항</td>
                </tr>
                <tr width="90%" align="center">
                    <td style="height:100px">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            height="100px"
                            width="100px"
                        ></v-img>
                    </td>
                    <td>
                        <div>
    <v-progress-linear
      v-model="pj1_imp"
      color="amber"
      height="25"
    ><template v-slot:default="{ value }">
        <strong>중요도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj1_pro"
      color="blue-grey"
      height="25"
    >
      <template v-slot:default="{ value }">
        <strong>진행도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj1_date"
      height="25"
    >
    <template v-slot:default="{ value }">
        <strong>기한 :{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
  </div>
                    </td>
                    
                </tr>
            

            </table>
        </v-card>
        <v-card class="pa-3">
            <table border="1" cellspacing="0" width="100%">
                <tr width="90%" align="center">
                    <td width="10%">프로젝트2</td>
                    <td >프로젝트2의 세부사항</td>
                </tr>
                <tr width="90%" align="center">
                    <td style="height:100px">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            height="100px"
                            width="100px"
                        ></v-img>
                    </td>
                    <td>
                        <div>
    <v-progress-linear
      v-model="pj2_imp"
      color="amber"
      height="25"
    ><template v-slot:default="{ value }">
        <strong>중요도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj2_pro"
      color="blue-grey"
      height="25"
    >
      <template v-slot:default="{ value }">
        <strong>진행도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj2_date"
      height="25"
    >
    <template v-slot:default="{ value }">
        <strong>기한 :{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
  </div>
                    </td>
                    
                </tr>
            

            </table>
        </v-card>
        <v-card class="pa-3">
            <table border="1" cellspacing="0" width="100%">
                <tr width="90%" align="center">
                    <td width="10%">프로젝트3</td>
                    <td >프로젝트3의 세부사항</td>
                </tr>
                <tr width="90%" align="center">
                    <td style="height:100px">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            height="100px"
                            width="100px"
                        ></v-img>
                    </td>
                    <td>
                        <div>
    <v-progress-linear
      v-model="pj3_imp"
      color="amber"
      height="25"
    ><template v-slot:default="{ value }">
        <strong>중요도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj3_pro"
      color="blue-grey"
      height="25"
    >
      <template v-slot:default="{ value }">
        <strong>진행도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj3_date"
      height="25"
    >
    <template v-slot:default="{ value }">
        <strong>기한 :{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
  </div>
                    </td>
                    
                </tr>
            

            </table>
        </v-card>
        <v-card class="pa-3">
            <table border="1" cellspacing="0" width="100%">
                <tr width="90%" align="center">
                    <td width="10%">프로젝트4</td>
                    <td >프로젝트4의 세부사항</td>
                </tr>
                <tr width="90%" align="center">
                    <td style="height:100px">
                        <v-img
                            src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                            height="100px"
                            width="100px"
                        ></v-img>
                    </td>
                    <td>
                        <div>
    <v-progress-linear
      v-model="pj4_imp"
      color="amber"
      height="25"
    ><template v-slot:default="{ value }">
        <strong>중요도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj1_pro"
      color="blue-grey"
      height="25"
    >
      <template v-slot:default="{ value }">
        <strong>진행도: {{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

    <br>

    <v-progress-linear
      v-model="pj1_date"
      height="25"
    >
    <template v-slot:default="{ value }">
        <strong>기한 :{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
  </div>
                    </td>
                    
                </tr>
            

            </table>
        </v-card>
        
    </v-container>

    

    
</template>

<script>
export default {
    name: 'PjmanaGridsystem',

    data: () => ({
      
        pj1_imp: 20,
      pj1_pro: 33,
      pj1_date: 78,

      pj2_imp: 60,
      pj2_pro: 40,
      pj2_date: 38,

        pj3_imp: 58,
        pj3_pro: 29,
        pj3_date: 10,

        pj4_imp: 86,
        pj4_pro: 63,
        pj4_date: 34,
    }),

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>