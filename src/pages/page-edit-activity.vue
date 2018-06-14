<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h1 class="title-component pl-3">Asignar Actividades</h1>
      <hr class="hr-color">
    </v-flex>
     <v-flex xs12 sm6 d-flex pa-3>
        <v-select
          label="Developers"
          solo
        ></v-select>
      </v-flex>
      <v-flex xs8 pa-3 class="container-details">
        <span class="week-card pr-3">Horas Estimadas:</span>
         <v-text-field
            label="2 Hrs"
            solo
            :disabled="disabledHours"
						hide-details
        ></v-text-field>
				<v-btn flat icon color="orange" @click="editdHours" class="ml-3">
          <v-icon>edit</v-icon>
				</v-btn>
      </v-flex>
      <v-flex xs12>
      <hr class="hr-color">
    </v-flex>
    <v-flex xs10 pa-3>
     <span class="title-activity">Enhancement [2] (register)- Traduccion Pais ciudad</span>
     <span class="span-repo">dp6WebQpHotelesNew</span>
     <span class="span-repo">enhacement</span>
    </v-flex>
    <v-flex s11 pa-3>
      <p class="bold-description">QA</p>
      <p class="title-activity"><span class="bold-description">Description</span>- Cambiar en Layout: Desayuno Buffet por Desayuno</p>
      <p class="title-activity"><span class="bold-description">Acceptance Test</span>- Cambiar en Layout: Desayuno Buffet por Desayuno</p>
      <p class="title-activity">Production Estimate N/A</p>
      <p class="title-activity"><span class="bold-description">Related Issues</span>N/A</p>
      <p class="title-activity"><span class="bold-description">Latest Assets</span>N/A </p>
    </v-flex>
    <v-flex s12 class="container-button">
      <v-btn class="button btn-red">Atrás</v-btn>
      <v-btn class="button btn-green">Guardar</v-btn>
    </v-flex>
  </v-layout>
</template>

<style lang="scss" scoped>
  .container-details {
    display: flex;
    align-items: center;
  }

  .hr-color {
    border:none;
    height: 1px;
    background:map-get($colors, hr);
  }

  .title-activity {
    color: map-get($colors, color-letter-title);
		font-family: 'D-DIN';		
		font-size: 13px;
  }

  .span-repo {
    border: 1px solid map-get($colors, button-orange);
		color: map-get($colors, button-orange);		
		font-family: 'D-DIN';
		font-size: 10px;
		padding: 5px;
  }

  .bold-description {
    color: map-get($colors, color-letter-title);
    font-family: 'D_DIN_Bold';
		font-size: 13px;
  }

  .container-button {
    background: map-get($colors, container-color);
    border-top:1px solid map-get($colors, border-select);
    text-align: center;
  }

</style>

<script>
	function data() {
		return {
			disabledHours: true,
		};
	}

	function editdHours() {
		this.disabledHours = false;
	}
	export default {
		data,
		methods: {
			editdHours,
		},
	};
</script>