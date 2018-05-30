<template>
  <v-container fluid>
    <v-form>
    <p>Creacion de Planilla</p>
    <v-layout row>
      <v-flex xs5>
        <v-subheader>Descripción</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-text-field label="Text" multi-line required></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn flat icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs5>
        <v-subheader>Notas de Implementación</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-text-field label="Text" multi-line required></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn flat icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs5>
        <v-subheader>Horas</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-text-field label="Time" required></v-text-field>
      </v-flex>
      <v-flex xs1>
        <v-btn flat icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
     <v-layout row>
      <v-flex xs5>
        <v-subheader>Referencia</v-subheader>
      </v-flex>
      <v-flex xs6>
        <v-text-field  type="file" required></v-text-field>
      </v-flex>
       <v-flex xs1>
        <v-btn flat icon>
          <v-icon>delete</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs5>
        <v-subheader>Agregar nuevo</v-subheader>
      </v-flex>
       <v-flex xs1>
        <v-btn flat icon>
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 text-xs-center>
        <v-btn>Crear Plantilla</v-btn>
      </v-flex>
    </v-layout>
    </v-form>
  </v-container>
</template>

