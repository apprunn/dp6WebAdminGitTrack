<template>
	<v-app>
		 <router-view></router-view>
	</v-app>
</template>

<script>
export default {
	name: 'app',
};
</script>

<style lang="scss">
	html {
		font-family: map-get($fonts, regular);
		font-size: 20px;
	}

	.button{	
		border-radius: 50px;
		box-shadow: none !important;
	}
		
	.btn-green {
			border:1px solid map-get($colors, button-green);
		  color:map-get($colors, button-green) !important;
			font-family: 'D-DIN';
			font-size: 12px;
	}

	.btn-orange {
			border:1px solid map-get($colors, button-orange);
		  color:map-get($colors, button-orange) !important;
			font-family: 'D-DIN';
			font-size: 12px;
	}

	.btn-red {
			border:1px solid map-get($colors, button-red);
		  color:map-get($colors, button-red) !important;
			font-family: 'D-DIN';
			font-size: 12px;
	}


	.title-component {
		color: map-get($colors, color-letter);
		font-family: 'D-DINCondensed';
		font-size: 20px;
	}

	.title-card {
		font-size: 16px;
	  font-family: 'D-DIN';
	}

	.list-projects {
		color: map-get($colors, color-letter);
		font-family: 'D-DIN';		
		font-size: 12px;
	}

	.week-card {
		color: map-get($colors, color-letter);
		font-family: 'D-DIN';		
		font-size: 13px;
	}

	.time-card {
		color: map-get($colors, color-letter);
		font-family: 'D_DIN_Bold';
		font-size: 14px;
	}

	.select {
		background: white;
		box-shadow: 0px 0px 5px 0px #000000 !important;
		height: 36px;
		padding-top: 0px;
    width: 316px !important; 
		-webkit-box-shadow: 0px 0px 5px 0px #000000 !important;
	}

	.tabs__item, .tabs__item--active {
			font-family: 'D-DIN';
			font-size: 12px;		
	}

.login {
	&-input {
		label,
		input,
		.v-icon {
			color: map-get($colors, white) !important;
		}

		.v-input__slot:before {
			content: none;
		}
	}
}
</style>
