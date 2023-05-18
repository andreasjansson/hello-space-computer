// pages/api/api.js
import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export default async function handler(req, res) {
  const model = 'stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf';
  const input = {
    prompt: 'computers floating in space, retro, amiga, stars, galaxies, futuristic, scifi',
    image_dimensions: "512x512"
  };

  const output = await replicate.run(model, { input });
  res.setHeader('Location', output[0]);
  res.status(302).end();
}
