<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques-3"
    >
    <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-app-bar-title>프로젝트</v-app-bar-title>
      <v-spacer></v-spacer>
      
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab 
          v-for="item in menu"
          :key="item.title"
          link
          :to="item.to">{{item.title}}</v-tab>
        </v-tabs>
      </template>
    
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="100"
    >
    <v-container style="height: 10px;"></v-container>
    </v-sheet>

    <v-navigation-drawer v-model="drawer" app>


      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            project manager
          </v-list-item-title>
          <v-list-item-subtitle>
            일루미나티
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item>
          <v-list-item-avatar>
            <v-img class="fill" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              홍길동
            </v-list-item-title>
            <v-list-item-subtitle>사번: 1234567</v-list-item-subtitle>
            <v-list-item-subtitle>부서: 개발</v-list-item-subtitle>
            <v-list-item-subtitle>직급: 주임</v-list-item-subtitle>
          
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>

        <v-divider></v-divider>

        <v-list two-line>
      <v-list-item-group
        v-model="selected"
        active-class="pink--text"
        multiple
      >
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title">
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>

                <v-icon
                  v-if="!active"
                  color="grey lighten-1"
                >
                  mdi-star-outline
                </v-icon>

                <v-icon
                  v-else
                  color="yellow darken-3"
                >
                  mdi-star
                </v-icon>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>

        

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in menu"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container
        class="dre"
        fluid>
        <router-view/>
    </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    drawer : false,
    selected: [2],
      items: [
        {
          action: '15 min',
          headline: '관리자: 조재현',
          subtitle: `프로젝트에 관한 세부사항 설명`,
          title: '프로젝트1',
        },
        {
          action: '2 hr',
          headline: '관리자: 박영무',
          subtitle: `프로젝트에 관한 세부사항 설명`,
          title: '프로젝트2',
        },
        {
          action: '6 hr',
          headline: '관리자: 신혜지',
          subtitle: '프로젝트에 관한 세부사항 설명',
          title: '프로젝트3',
        },
        {
          action: '12 hr',
          headline: '관리자: 김영희',
          subtitle: '프로젝트에 관한 세부사항 설명',
          title: '프로젝트4',
        },
        {
          action: '18hr',
          headline: '관리자: 김철수',
          subtitle: '프로젝트에 관한 세부사항 설명',
          title: '프로젝트5',
        },
      ],
      menu:[
        { title: ' 프로젝트 보기', to:'projectview'},
        { title: '프로젝트 관리', to:'projectmanager'},
        { title:'대시보드', to: '/'}

      ],
    test: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' ,to: '/'},
          { title: 'gridsystem', icon: 'mdi-image', to:'gridsystem'},
          { title: 'About', icon: 'mdi-help-box' },
        ],
  }),
};
</script>
