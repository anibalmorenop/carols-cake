# Prompt maestro para publicaciones de producto

Usar este prompt para convertir fotos reales de postres en imagenes listas para publicar, manteniendo el producto real y aplicando la identidad visual de Los Dulcitos de Caro.

## Prompt base

```text
Use case: ads-marketing
Asset type: Instagram square post image
Input images: Image 1 is the original product photo showing [DESCRIPCION_REAL_DEL_POSTRE]; preserve the real dessert type, shape, decoration, packaging or plate, and handmade look. Image 2 is the brand logo reference for color, tone, cupcake motif, and typography feel.
Primary request: Transform the product photo into a polished publish-ready branded social media image for the dessert business "Los Dulcitos de Caro".
Scene/backdrop: keep the real dessert as the main subject, but improve the surrounding presentation with a clean warm vanilla/white background area, soft blush accents, and subtle chocolate/pink brand details.
Subject: [NOMBRE_REAL_DEL_POSTRE], homemade and ready to sell.
Style/medium: realistic product-photo enhancement with tasteful brand graphic overlay, boutique homemade bakery aesthetic.
Composition/framing: square 1:1 Instagram composition. The dessert should remain visible, centered, and appetizing. Add a clean lower or upper brand band with the brand name and a small cupcake/heart accent inspired by the logo. Keep the product unobstructed.
Lighting/mood: brighter, warmer, appetizing, reduce unwanted color cast, soften harsh glare, improve contrast while keeping it natural.
Color palette: chocolate brown #6B2F17, soft blush pink #E86B7D, vanilla cream #FFF2DD, cherry accent #D9485F, white background.
Text (verbatim): "Los Dulcitos de Caro" and "[TEXTO_PRODUCTO]".
Constraints: preserve the actual dessert and its real details; do not invent a different product; do not add people; do not add phone numbers, prices, social handles, QR codes, or fake certifications. Keep text legible and spelled correctly. No watermark.
```

## Campos a reemplazar

- `[DESCRIPCION_REAL_DEL_POSTRE]`: descripcion objetiva de lo que se ve en la foto.
- `[NOMBRE_REAL_DEL_POSTRE]`: nombre del producto para el prompt.
- `[TEXTO_PRODUCTO]`: texto corto que aparecera en la pieza.

## Ejemplo: brownies

```text
Input images: Image 1 is the original product photo showing individually wrapped chocolate dessert portions; preserve the real dessert type, packaging, and handmade look.
Subject: individually wrapped chocolate brownie or cake portions, homemade and ready to sell.
Text (verbatim): "Los Dulcitos de Caro" and "Brownies caseros".
```

## Ejemplo: torta de pina y cereza

```text
Input images: Image 1 is the original product photo showing a homemade pineapple and cherry cake with glossy topping; preserve the real dessert type, round shape, fruit decoration, cake board, and handmade look.
Subject: homemade pineapple and cherry cake, ready to sell.
Text (verbatim): "Los Dulcitos de Caro" and "Torta de pina y cereza".
```

## Ejemplo: cafecitos sopresa

```text
Input images: Image 1 is the original product photo showing two chocolate dessert cups served in coffee-style cups; preserve the real dessert type, cups, chocolate cream, sprinkles, heart details, and handmade look.
Subject: two small chocolate dessert cups served in coffee-style cups, homemade and ready to sell.
Text (verbatim): "Los Dulcitos de Caro" and "Cafecitos Sopresa".
Text requirements: Product name spelling must be C-a-f-e-c-i-t-o-s space S-o-p-r-e-s-a. Do not write Cafesito, Cafecito, sorpresa, or Cakesito.
```

## Notas de consistencia

- Mantener formato cuadrado 1:1 para Instagram.
- Mantener la marca como banda inferior o superior, no tapando el postre.
- Conservar el producto real; la edicion debe embellecer, no cambiar lo que se vende.
- Si el texto sale imperfecto en una imagen generada, repetir con el mismo prompt y reforzar: "Text must be clean, readable, and spelled exactly".
