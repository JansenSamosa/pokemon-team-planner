(this["webpackJsonppokemon-team-planner"]=this["webpackJsonppokemon-team-planner"]||[]).push([[0],{24:function(e,t,a){},28:function(e,t,a){e.exports=a(61)},33:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(10),c=a.n(o),i=(a(33),a(1)),s=a(2),l=a(4),p=a(3),u=a(7),m=a(8),f=a(26),g=a(27),h=[],d=a(5),b={team:[]},v=Object(m.c)({pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POKEMON":for(var a=t.payload.pokemon.sort((function(e,t){return e.num-t.num})),n=0;n<a.length;n++)n>0&&a[n].evolution_chain_url!==a[n-1].evolution_chain_url&&(a[n-1].isFinalEvo=!0);return Object(g.a)(a);default:return e}},team:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=void 0;switch(t.type){case"ADD_TO_TEAM":return(a=e.team).length<6&&a.push(t.payload.pokemonMember),Object(d.a)(Object(d.a)({},e),{},{team:a});case"REMOVE_FROM_TEAM":return(a=e.team).splice(t.payload.slot-1,1),Object(d.a)(Object(d.a)({},e),{},{team:a});default:return e}}}),k=[f.a],y=Object(m.e)(v,{},Object(m.d)(m.a.apply(void 0,k),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),E=a(14),O=a.n(E),j=a(9),N=a.n(j),S=function(e){var t="";switch(e){case"normal":t="#bebeb2";break;case"grass":t="#8cd751";break;case"fire":t="#fa5643";break;case"water":t="#56aeff";break;case"fighting":t="#a85644";break;case"flying":t="#79a3ff";break;case"poison":t="#ab5da2";break;case"ground":t="#e9c856";break;case"rock":t="#cdbc72";break;case"bug":t="#c3d21f";break;case"ghost":t="#7975d7";break;case"electric":t="#fde53c";break;case"psychic":t="#f26295";break;case"ice":t="#96f1ff";break;case"dragon":t="#8673ff";break;case"dark":t="#866350";break;case"steel":t="#c4c2db";break;case"fairy":t="#faadff";break;default:t="#bebeb2"}return t},w=function(e){for(var t={normal:1,flying:1,ground:1,bug:1,steel:1,water:1,electric:1,ice:1,dark:1,fighting:1,poison:1,rock:1,ghost:1,fire:1,grass:1,psychic:1,dragon:1,fairy:1},a=0;a<e.length;a++)switch(e[a]){case"normal":t.fighting*=2,t.ghost*=0;break;case"grass":t.flying*=2,t.poison*=2,t.bug*=2,t.fire*=2,t.ice*=2,t.ground*=.5,t.water*=.5,t.grass*=.5,t.electric*=.5;break;case"fire":t.ground*=2,t.rock*=2,t.water*=2,t.bug*=.5,t.steel*=.5,t.fire*=.5,t.grass*=.5,t.ice*=.5,t.fairy*=.5;break;case"water":t.grass*=2,t.electric*=2,t.steel*=.5,t.fire*=.5,t.water*=.5,t.ice*=.5;break;case"fighting":t.flying*=2,t.psychic*=2,t.fairy*=2,t.rock*=.5,t.bug*=.5,t.dark*=.5;break;case"flying":t.rock*=2,t.electric*=2,t.ice*=2,t.grass*=.5,t.bug*=.5,t.fighting*=.5,t.ground*=0;break;case"poison":t.ground*=2,t.psychic*=2,t.fighting*=.5,t.poison*=.5,t.bug*=.5,t.grass*=.5,t.fairy*=.5;break;case"ground":t.water*=2,t.grass*=2,t.ice*=2,t.rock*=.5,t.poison*=.5,t.electric*=0;break;case"rock":t.fighting*=2,t.ground*=2,t.steel*=2,t.water*=2,t.grass*=2,t.normal*=.5,t.flying*=.5,t.poison*=.5,t.fire*=.5;break;case"bug":t.flying*=2,t.rock*=2,t.fire*=2,t.fighting*=.5,t.ground*=.5,t.grass*=.5;break;case"ghost":t.ghost*=2,t.dark*=2,t.poison*=.5,t.bug*=.5,t.normal*=0,t.fighting*=0;break;case"electric":t.ground*=2,t.flying*=.5,t.steel*=.5,t.electric*=.5;break;case"psychic":t.bug*=2,t.ghost*=2,t.dark*=2,t.fighting*=.5,t.psychic*=.5;break;case"ice":t.fighting*=2,t.rock*=2,t.steel*=2,t.fire*=2,t.ice*=.5;break;case"dragon":t.ice*=2,t.dragon*=2,t.fairy*=2,t.fire*=.5,t.water*=.5,t.grass*=.5,t.electric*=.5;break;case"dark":t.fighting*=2,t.bug*=2,t.fairy*=2,t.ghost*=.5,t.dark*=.5,t.psychic*=0;break;case"steel":t.fighting*=2,t.ground*=2,t.fire*=2,t.normal*=.5,t.flying*=.5,t.rock*=.5,t.bug*=.5,t.steel*=.5,t.grass*=.5,t.psychic*=.5,t.ice*=.5,t.dragon*=.5,t.fairy*=.5,t.poison*=0;break;case"fairy":t.poison*=2,t.steel*=2,t.dark*=.5,t.bug*=.5,t.fighting*=.5,t.dragon*=0}return t},F=(a(57),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getStyle=function(){return e.props.noBorder?{backgroundColor:"".concat(S(e.props.type))}:{backgroundColor:"".concat(S(e.props.type)),border:".25vw solid ".concat(N()(S(e.props.type)).darken(.5))}},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pokemon-type",style:this.getStyle()},this.props.type.charAt(0).toUpperCase()+this.props.type.slice(1))}}]),a}(n.Component)),_=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).addPokemonToTeam=function(){e.props.addToTeam(e.props.pokemon)},e.getPokedexNum=function(){var t=e.props.pokemon.num;return 1===(t=t.toString()).length&&(t="00"+t),2===t.length&&(t="0"+t),"#".concat(t)},e.getStyle=function(t){var a=e.props.pokemon.types,n={};if(a[t]){var r=N()(S(a[t])).saturate(3);n.backgroundColor=r,0!==t||a[t+1]||(n.width="100%")}return n},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"pokemon",onClick:this.addPokemonToTeam},r.a.createElement("div",{className:"type-color",style:this.getStyle(0)}),r.a.createElement("div",{className:"type2-color",style:this.getStyle(1)}),r.a.createElement("div",{className:"sprite"},r.a.createElement("img",{src:this.props.pokemon.sprite})),r.a.createElement("div",{className:"info"},r.a.createElement("h1",null,"".concat(this.props.pokemon.name.charAt(0).toUpperCase()+this.props.pokemon.name.slice(1)," ").concat(this.getPokedexNum())),r.a.createElement("div",{className:"types"},this.props.pokemon.types.map((function(t){return r.a.createElement(F,{className:"type",type:t,key:"".concat(e.props.key," - ").concat(t)})})))))}}]),a}(n.Component),T=Object(u.b)(null,{addToTeam:function(e){return function(t){t({type:"ADD_TO_TEAM",payload:{pokemonMember:"".concat(e.num)}})}}})(_),C=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).getPokemonList=function(){var t=e.props.searchOptions,a=t.search,n=t.typeFilter,r=t.finalEvoFilter;t.sort;a=a.toLowerCase().replace(" ","");var o=e.props.pokemon;return""!==a&&(o=o.filter((function(e){return e.name.includes(a)}))),"all"!==n&&(o=o.filter((function(e){var t=e.types;if(t[0]===n||t[1]===n)return e}))),r&&(o=o.filter((function(e){return e.isFinalEvo&&!e.isBaby}))),o},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pokemon-list"},this.getPokemonList().map((function(e){return r.a.createElement(T,{pokemon:e,key:e.num})})))}}]),a}(n.Component),M=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:"",typeFilter:"all",finalEvoFilter:!1,sort:""},e.setSearchOptions=function(){setTimeout((function(){e.props.setSearchOptions(Object(d.a)({},e.state))}),10)},e.changeSearch=function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{search:t.target.value}),e.setSearchOptions())},e.setTypeFilter=function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{typeFilter:t.target.value}),e.setSearchOptions())},e.toggleFinalEvoFilter=function(){var t=!e.state.finalEvoFilter;e.setState(Object(d.a)(Object(d.a)({},e.state),{},{finalEvoFilter:t}),e.setSearchOptions())},e.getToggleStyle=function(e){return e?"on":"off"},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-filter-sort-bar"},r.a.createElement("input",{type:"text",onChange:this.changeSearch.bind(this),placeholder:"Search for pokemon"}),r.a.createElement("select",{onChange:this.setTypeFilter.bind(this)},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"normal"},"Normal"),r.a.createElement("option",{value:"grass"},"Grass"),r.a.createElement("option",{value:"fire"},"Fire"),r.a.createElement("option",{value:"water"},"Water"),r.a.createElement("option",{value:"fighting"},"Fighting"),r.a.createElement("option",{value:"flying"},"Flying"),r.a.createElement("option",{value:"poison"},"Poison"),r.a.createElement("option",{value:"ground"},"Ground"),r.a.createElement("option",{value:"rock"},"Rock"),r.a.createElement("option",{value:"bug"},"Bug"),r.a.createElement("option",{value:"ghost"},"Ghost"),r.a.createElement("option",{value:"electric"},"Electric"),r.a.createElement("option",{value:"psychic"},"Psychic"),r.a.createElement("option",{value:"ice"},"Ice"),r.a.createElement("option",{value:"dragon"},"Dragon"),r.a.createElement("option",{value:"dark"},"Dark"),r.a.createElement("option",{value:"steel"},"Steel"),r.a.createElement("option",{value:"fairy"},"Fairy")),r.a.createElement("button",{onClick:this.toggleFinalEvoFilter,className:"toggle-finalevo-filter ".concat(this.getToggleStyle(this.state.finalEvoFilter))},"Final Evolutions Only"))}}]),a}(n.Component),A=(a(58),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchOptions:{search:"",typeFilter:"all",finalEvoFilter:!1,sort:""}},e.setSearchOptions=function(t){e.setState(Object(d.a)(Object(d.a)({},e.state),{},{searchOptions:Object(d.a)(Object(d.a)({},e.state.searchOptions),t)}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pokemon-selection"},r.a.createElement(M,{setSearchOptions:this.setSearchOptions}),r.a.createElement(C,{pokemon:this.props.pokemon,searchOptions:this.state.searchOptions}))}}]),a}(n.Component)),P=Object(u.b)((function(e){return{pokemon:e.pokemon}}),{})(A),D=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).removePokemonFromTeam=function(){e.props.removeFromTeam(e.props.slot)},e.getStyle=function(){var t={};if(e.props.pokemonMember){var a=e.props.pokemonMember;t.backgroundColor=S(a.types[0]),t.borderColor=N()(S(a.types[0])).darken(1),a.types[1]&&(t.borderRight=".7vh solid ".concat(N()(S(a.types[1])).darken(1)),t.borderBottom=".7vh solid ".concat(N()(S(a.types[1])).darken(1)))}return t},e.renderName=function(){if(e.props.pokemonMember){var t=e.props.pokemonMember.name;return t.charAt(0).toUpperCase()+t.slice(1)}},e.renderSprite=function(){var t=e.props.pokemonMember;return t?r.a.createElement("img",{src:t.sprite,alt:""}):null},e.renderTypes=function(){if(e.props.pokemonMember)return e.props.pokemonMember.types.map((function(e){return r.a.createElement(F,{type:e})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"pokemon"},r.a.createElement("p",{className:"name"},this.renderName()),r.a.createElement("div",{className:"sprite",onClick:this.removePokemonFromTeam,style:this.getStyle()},r.a.createElement("div",{className:"overlay"}),this.renderSprite()),r.a.createElement("div",{className:"types"},this.renderTypes()))}}]),a}(n.Component),I=Object(u.b)((function(e,t){return{pokemonMember:e.pokemon.filter((function(a){return a.num===parseInt(e.team.team[parseInt(t.slot)-1])}))[0]}}),{removeFromTeam:function(e){return function(t){t({type:"REMOVE_FROM_TEAM",payload:{slot:e}})}}})(D),R=(a(59),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"team-manager"},r.a.createElement("div",{className:"team-pokemon"},r.a.createElement(I,{slot:"1"}),r.a.createElement(I,{slot:"2"}),r.a.createElement(I,{slot:"3"}),r.a.createElement(I,{slot:"4"}),r.a.createElement(I,{slot:"5"}),r.a.createElement(I,{slot:"6"})))}}]),a}(n.Component)),B=(a(24),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getStrengths=function(){return w(e.props.pokemon.types)},e.renderStrengths=function(t,a){var n=[],o=!0;for(var c in n.push(r.a.createElement("h1",null,a)),e.getStrengths())e.getStrengths()["".concat(c)]===t&&(o=!0,n.push(r.a.createElement(F,{type:c,noBorder:!0})));if(o)return n},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"row"},this.renderStrengths(0,"Immune from")),r.a.createElement("div",{className:"row"},this.renderStrengths(.25,"1/4 from")),r.a.createElement("div",{className:"row"},this.renderStrengths(.5,"1/2 from")),r.a.createElement("div",{className:"row"},this.renderStrengths(2,"2x from")),r.a.createElement("div",{className:"row"},this.renderStrengths(4,"4x from")))}}]),a}(n.Component)),x=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getPokemon=function(t){return e.props.pokemon.filter((function(e){return e.num===parseInt(t)}))[0]},e.renderColumns=function(){return e.props.team.team.map((function(t,a){return r.a.createElement(B,{key:"column-".concat(a+1),pokemon:e.getPokemon(t)})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"info-panel"},r.a.createElement("div",{className:"columns"},this.renderColumns()))}}]),a}(n.Component),L=Object(u.b)((function(e){return{pokemon:e.pokemon,team:e.team}}),{})(x),U=(a(60),function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){y.dispatch((function(e){var t=[],a=0,n=setInterval((function(){Promise.all([O.a.get("https://pokeapi.co/api/v2/pokemon/".concat(a+1)),O.a.get("https://pokeapi.co/api/v2/pokemon-species/".concat(a+1,"/"))]).then((function(e){var a=e[0],n=e[1],r=a.data.types.sort((function(e,t){return e.slot-t.slot}));"normal"===a.data.types[0].type.name&&a.data.types[1]&&(r=r.reverse());var o={num:a.data.id,name:a.data.name,types:r.map((function(e){return e.type.name})),stats:a.data.stats.map((function(e){return e.base_stat})),isFinalEvo:!1,isBaby:n.data.is_baby,sprite:a.data.sprites.front_default,evolution_chain_url:n.data.evolution_chain.url};t.push(Object(d.a)({},o))})).catch((function(a){e({type:"FETCH_POKEMON",payload:{pokemon:t}}),clearInterval(n)})),a%250!==0&&12!==a||e({type:"FETCH_POKEMON",payload:{pokemon:t}}),a++}),1)}))}},{key:"render",value:function(){return r.a.createElement(u.a,{store:y},r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"left-column"},r.a.createElement(R,null),r.a.createElement(L,null)),r.a.createElement("div",{className:"right-column"},r.a.createElement(P,null))))}}]),a}(n.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.4225ed7a.chunk.js.map