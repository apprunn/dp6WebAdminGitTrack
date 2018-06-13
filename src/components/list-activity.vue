<template>
  <v-layout>
		<v-container>
      <div>
        <div class="week-card title-activity">{{gitName}}</div>
        <v-btn flat icon color="orange" class="btn-check" @click="goToEdit">
          <v-icon>edit</v-icon>
        </v-btn>
      </div>
      <div class="container-details">
				<div class="container-repo">
					<span class="span-repo">{{gitRepoName}}</span>
				</div>     
			 <img :src="urlImage" class="image">
			 <v-icon color="green">timer</v-icon>
			 <span class="time">{{timeEstimated}}</span>
      </div>
		</v-container>	
  </v-layout>
</template>

<script>

function goToEdit() {
	this.$emit('go-to-edit');
}


export default {
	name: 'list-activity',
	props: {
		gitName: {
			type: String,
		},
		gitRepoName: {
			type: String,
		},
		urlImage: {
			type: String,
		},
		timeEstimated: {
			type: Number,
		},
	},
	methods: {
		goToEdit,
	},
};
</script>

<style lang="scss" scoped>
  .title-activity {
    display: inline-block;
    width: 60%;
  }

  .btn-check {
    margin-top:-5px;
    margin-left: 70px;
    position: absolute;
  }

	.span-repo {
		border: 1px solid map-get($colors, button-orange);
		color: map-get($colors, button-orange);		
		font-family: 'D-DIN';
		font-size: 10px;
		padding: 5px;
	
	}

	.image {
		width: 25px;
		height: 25px;
		margin-right: 5px;
	}

	.container-details {
		height: 40px;
		display: flex;
		align-items: center;
	}

	.container-repo {
		width: 70%;
	}

	.time {
		font-family: 'D-DIN';		
		font-size: 14px;
		color: map-get($colors, button-green);
		margin-left: 5px;
	}
</style>

