<template>
  <v-container fluid>
    <v-form>
    <v-layout row>
      <v-flex xs12>
        <v-text-field label="Título" multi-line required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-text-field label="Descripción" multi-line required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-text-field label="Notas de implementación" multi-line required></v-text-field>
      </v-flex>
    </v-layout>
     <v-layout row>
      <v-flex xs4>
        <v-text-field label="Horas" required></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3>
        <v-subheader class="container-label">Referencia</v-subheader>
      </v-flex>
       <v-flex xs1>
        <v-btn flat icon>
          <v-icon>present_to_all</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <v-btn>Crear Issue</v-btn>
      </v-flex>
    </v-layout>
    </v-form>

  </v-container>
</template>

<style lang="scss" scoped>

  .container-label {
    padding-left: 0;
  }
</style>
