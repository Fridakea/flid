// https://docs.astro.build/en/guides/images/#configure-squoosh
import { defineConfig, squooshImageService } from 'astro/config';

export default defineConfig({
  image: {
    service: squooshImageService(),
  },
});