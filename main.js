var map = new Vue({
  el: '#map',
  data: {
      markers: []
    //anchorHref: "http://nfl.com",
    // friends: [
    //   {
    //     firstName: "jeff",
    //     lastName: "jeffereson",
    //   },
    //   {
    //     firstName: "bobby",
    //     lastName: "roberts",
    //   },
    // ]
  },
  methods: {
    addMarker: function(evt){
      map.markers.push({
        lat: evt.pageX + "px", //ems or rems responsive way to add x and y coordinate on html
        lng: evt.pageY + "px",
        msg: ""
        //map.markers.msg
        //v-on:hover
      })
      //place marker onto map at location
    },
    removeMarker: function(i){
      map.markers.splice(i,1)
      console.log(i)
    }
  }
})
