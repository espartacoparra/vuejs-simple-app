<template>
  <div class="hello">
    <h4 class="mb-5">Encuentra Tu Ubicación</h4>
    <div class="row">
      <div class="col-3">
        <b-list-group>
          <b-list-group-item>Ciudad : {{location.city}}</b-list-group-item>
          <b-list-group-item>Estado : {{location.regionName}}</b-list-group-item>
          <b-list-group-item>Pais : {{location.country}}</b-list-group-item>
          <b-list-group-item>IPS : {{location.isp}}</b-list-group-item>
          <b-list-group-item>IP : {{location.query}}</b-list-group-item>
          <b-list-group-item>Latitud : {{location.lat}}</b-list-group-item>
          <b-list-group-item>Longitud : {{location.lon}}</b-list-group-item>
        </b-list-group>
      </div>
      <div class="col-6">
        <l-map
          v-if="showMap"
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 80%"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-circle-marker :lat-lng="circle.center" :radius="circle.radius" :color="circle.color" />
        </l-map>
      </div>
      <div class="col-3">
        <b-form @submit="onSubmit" @reset="onReset">
          <b-form-group
            id="input-group-1"
            label="Busca una ip"
            label-for="input-1"
            description="Ingresa la dirección ip del equipo que desees buscar"
          >
            <b-form-input id="input-1" v-model="form.ip" type="text" required placeholder="8.8.8.8"></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" class="mr-2">Buscar</b-button>
          <b-button type="reset" variant="danger">Mi ubicación</b-button>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LCircleMarker } from "vue2-leaflet";
import RequestService from "../services/requestService";
export default {
  name: "HelloWorld",
  components: {
    LMap,
    LTileLayer,
    LCircleMarker
  },
  created() {
    this.getUsers();
    this.getUsersAwait();
    this.getLocation("");
  },
  props: {
    msg: String
  },
  data() {
    return {
      form: {},
      userList: [],
      location: [],
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 13,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true,
      circle: {
        center: [0, 0],
        radius: 6,
        color: "red"
      }
    };
  },
  methods: {
    getUsers() {
      RequestService.getUsers().then(data => {
        this.userList = data;
      });
    },
    async getUsersAwait() {
      this.userList = await RequestService.getUsers();
    },
    async getLocation(ip) {
      this.location = await RequestService.getLocation(ip);
      this.center = latLng(this.location.lat, this.location.lon);
      this.currentCenter = latLng(this.location.lat, this.location.lon);
      this.circle.center = [this.location.lat, this.location.lon];
    },
    userLocaliztion() {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.center = latLng(lat, lon);
        this.currentCenter = latLng(lat, lon);
        this.circle.center = [lat, lon];
      });
    },
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert("Click!");
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.getLocation(this.form.ip);
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.ip = "";
      this.getLocation("");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
