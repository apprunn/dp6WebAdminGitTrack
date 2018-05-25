<template>
 	<v-container :fluid="true" pl-0 pt-0 pr-0 pb-0>
	 	<v-layout row wrap>
		 	<v-flex xs6 md3>
			<v-navigation-drawer
    		stateless
    		value="true"
				class="blue lighten-3 height"
  		>
    		<v-list>
      		<v-list-tile>
        		<v-list-tile-action>
          		<v-icon>home</v-icon>
        		</v-list-tile-action>
        	  <v-list-tile-title>Item1</v-list-tile-title>
      		</v-list-tile>
      		<v-list-group
        		prepend-icon="account_circle"
        		value="true"
      		>
        		<v-list-tile slot="activator">
          		<v-list-tile-title>Item2</v-list-tile-title>
        		</v-list-tile>
       			 	<v-list-group
          			sub-group
          			no-action
          			value="true"
        				>
          				<v-list-tile slot="activator">
            				<v-list-tile-title>sub-1</v-list-tile-title>
          				</v-list-tile>
        			</v-list-group>
        			<v-list-group
          			sub-group
          			no-action
        			>
          				<v-list-tile slot="activator">
            				<v-list-tile-title>sub-2</v-list-tile-title>
          				</v-list-tile>
        			</v-list-group>
     			 </v-list-group>
    		</v-list>
  		</v-navigation-drawer>
		 </v-flex>	
	 </v-layout>	 
 </v-container>
</template>

<style lang="scss" scoped>
  .height {
		height: 100vh !important;
	}
</style>