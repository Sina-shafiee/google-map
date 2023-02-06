import { CustomMap } from './CustomMap';
import { Company } from './company';
import { User } from './User';

const user = new User();
const company = new Company();

const map = new CustomMap('map');

map.addMarker(company);
map.addMarker(user);
console.log(map);
