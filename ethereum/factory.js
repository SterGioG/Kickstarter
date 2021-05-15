import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x451EF10582Aad6BC3D1F09E910e3f30EF9098623'
);

export default instance;
