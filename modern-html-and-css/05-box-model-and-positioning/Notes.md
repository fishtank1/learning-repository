# Box Model and Positioning

Box model defines the design and layout of elements on a web page. Every elements are layed out as a rectangular box. The box model describes how the content, padding, border, margin of the box are rendered.

## Box model properties

width & height, max-width, min-width, min-height, max-height
padding, padding-top, padding-bottom, padding-right, padding-left
border, border-style, border-color, border-width, border-radius
maring, maring-top, margin-bottom, margin-right, margin-left
box-sizing

Margin is outside box and padding is inside box.

### Width

max-width max amount the box can stretch. -> Responsive design use this more.
min-width min amount the box can shrink.

Border box adds margin and padding into the total width calculations. Hence always consider the same when making desings from a sheet.

### Margin

The margin of first and last child of the parent element gets applied on the parent itself.

### Box-sizing

Adding margin and padding to the width calculation use border-box. To exclude them use content-box.

### Display Property

Specifies display behaviour (type of rendering box) of an element.

#### Important:

- Inline Elements:
  -- Takes only width the width that is sufficient for its content.
  -- Does not start & end with a new line.
  -- Allows other inline elements to sit behind
  -- Setting height, width and top and bottom margin does not take effect.

- Block Elements:
  -- Takes complete width of the screen irrespective of the sufficient space for content is filled.
  -- Always starts & ends on new line.
  -- Does not allow other elements to sit behind.
  -- Has top and bottom margin.

### Position Property

Specifies how to position elements on the page relative to the rest of the layout.
By default all elements are position as static.

Static means it position in the same order as specified in the HTML markup. Their position can't also be changes using top, right properties.

Relative is same as static but the top right bottom left properties can be applied.

Absolute means an element inside of a parent can be positioned anywhere within that parent.

Fixed elements stays on the specified place regardless of anywhere we scroll. The fixed elements are taken out of the natural layout and their space is occupied by their next adjacent sibling.

Sticky is a combination of relative and fixed. Acts as relative until a specified position is reached on screen. After that it acts as fixed element until it's parent or box goes past the specified position.

Fixed and Sticky elements are pushed back in z-index.

Similar to some object on the curtain as we move the curtain the object also moves with the curtain. But in case of fixed the object stays on the same place even though the curatin is moved.

#### z-index

Position of elements when on top of each other. Higher the number in z-index higher the position it will have when placed on top of other elements.
Takes both positive and negetive values.

### Box shadow

Allows us to create a shadow effect to our element.
3 mandatory values 2 options.

horizontal, vertical, blue radius, spread readius, color

horizontal, verticale and color are mandatory.
