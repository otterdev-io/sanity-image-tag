/// <reference types="@sanity/astro/module" />

import type { SanityImageComponentDefaults } from "@sanity-image-component/common/defaults";

declare global {
  var sanityImageComponentDefaults: SanityImageComponentDefaults;
}
