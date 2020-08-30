# convert-kitchen

convert-kitchen aims to standardize the conversion of international measurements of kitchen ingredients.

Did you know?
    In Australia, a cup of water is 250mls
    In the U.K., a cup of water is about 284.131mls
    In the U.S., a cup of water is about 236.588mls
        Unless it's on nutruition labeling in which case it's 240mls
        Or unless it's in reference to a drinking cup, like a cup of orange juice, in which case it's 118ml
    In Japan, it's 200mls
    The list goes on...

The next time you're online looking at a recipe, have a wonder about the origin of its geographical location!

## Usage

The `convert` export provides conversion from a given unit of measurement to a given classification.

```typescript
import { convert, Classifications } from 'convert-kitchen';

const result = convert(
    { 
        fromUnit: {
            classification: Classifications.us,
            name: 'cup',
            quantity: 2,
        },
        toClassification: { 
            classification: Classifications.metric
        } 
     }
);

console.log(result);
// {
//    name: 'cup',
//    classification: 'metric',
//    quantity: 1.893,
// }
    
```

## Available Classifications and Defintions

Classifications including but not limited to:
* us
* metric
* imperial

Definitions including but not limited to:
* volume
* temperature

Browse the [definitions](src/defintions)





