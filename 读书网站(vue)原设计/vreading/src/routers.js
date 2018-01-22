import Home from './components/Home.vue';
import Consultation from './components/Consultation.vue';
import Ancientbooks from './components/Ancientbooks.vue';
import Ebooks from './components/Ebooks.vue';
import Networknovel from './components/Networknovel.vue';
import Onlineread from './components/Onlineread.vue';
import Publishingbooks from './components/Publishingbooks.vue';
import Readnav from './components/Readnav.vue';


import NewsCon from './consultation-components/NewsCon.vue';
import BooknewsCon from './consultation-components/BooknewsCon.vue';
import Bookreview from './consultation-components/Bookreview.vue';
import History from './consultation-components/History.vue';
import CultureCon from './consultation-components/CultureCon.vue';
import ArtCon from './consultation-components/ArtCon.vue';
import CharacterCon from './consultation-components/CharacterCon.vue';
import DigestCon from './consultation-components/DigestCon.vue';
import ConsultationInfo from './consultation-components/ConsultationInfo'

export default[
  {path:"/",component:Home},
  {
  	path:"/consultation",component:Consultation,
  	children:[
	  	{path:"/consultation",component:NewsCon},
  		{path:"booknews",component:BooknewsCon},
  		{path:"bookreview",component:Bookreview},
  		{path:"history",component:History},
  		{path:"culture",component:CultureCon},
  		{path:"art",component:ArtCon},
  		{path:"character",component:CharacterCon},
  		{path:"digest",component:DigestCon},
      {path:"consultationInfo/:conId",component:ConsultationInfo}
  	]
  },
  {path:"/ancientbooks",component:Ancientbooks},
  {path:"/ebooks",component:Ebooks},
  {path:"/networknovel",component:Networknovel},
  {path:"/onlineread",component:Onlineread},
  {path:"/publishingbooks",component:Publishingbooks},
  {path:"/readnav",component:Readnav},

]






