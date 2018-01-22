<template>
  	<div id="readnav" class="bodyWidth row">
      <h3 class="my-3 mc text-muted">读书导航</h3>
    	<div class="readNavBox borderddd mb-3">
        <!-- 正六边形 -->
        <div class="hexagonsOne clearfix">
          <div v-for="readnav in readnavsOne">
            <div class="hexagon">
                <div class="boxS">
                    <div class="boxT">
                        <a href=""><div class="overlay text-center">
                            <img class="mt-4" :src="readnav.url" alt="">
                            <span class="hexagon-span">{{readnav.title}}</span>
                        </div></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="hexagonsTwo clearfix">
          <div v-for="readnav in readnavsTwo">
            <div class="hexagon">
                <div class="boxS">
                    <div class="boxT">
                        <a href=""><div class="overlay text-center">
                            <img class="mt-3" :src="readnav.url" alt="">
                            <span class="hexagon-span">{{readnav.title}}</span>
                        </div></a>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div class="hexagonsThree clearfix">
          <div v-for="readnav in readnavsThree">
            <div class="hexagon">
                <div class="boxS">
                    <div class="boxT">
                        <a href=""><div class="overlay text-center">
                            <img class="mt-4" :src="readnav.url" alt="">
                            <span class="hexagon-span">{{readnav.title}}</span>
                        </div></a>
                    </div>
                </div>
            </div>
          </div>
        </div>


        </div> 
      </div>
  	</div> 
</template>

<script>

  	export default {
    	name:'readnav',
    	data(){
    		return {
          readnavsOne:[],
          readnavsTwo:[],
          readnavsThree:[]
    		}
    	},
    	methods:{

    	},
    	created(){
    		this.$http.get('http://localhost:3000/readNav').then((res) => {
          this.readnavsOne = res.body.slice(0,7);
          this.readnavsTwo = res.body.slice(7,13);
          this.readnavsThree = res.body.slice(13,21);
        });
    	}
  	}
</script>

<style>
  
</style>
