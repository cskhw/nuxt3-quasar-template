declare global {}

// Pinia
import "pinia";
import { Router } from "vue-router";
import api from "@/api/api";
import { tldexie } from "@/assets/javascripts/dexie";

// Extend Pinia Object
declare module "pinia" {
  export interface PiniaCustomProperties {
    router: Router;
    api: typeof api;
  }
}

// Extend Window Object
interface Window {}
// Extend Document Object
interface Document {}

// Global constants
// declare const google;
// declare const AppleID;
