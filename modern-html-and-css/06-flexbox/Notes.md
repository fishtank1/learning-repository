Flex is a layout method used to arrange, align, and position elements in a single dimension. The flexbox model works with two axis: the main axis and the cross axis, which determine how flex items are laid out within a container.

### Main Axis

The main axis defines the direction in which the flex items are placed. This can be row-wise (left to right or right to left) or column-wise (top to bottom or bottom to top). The property associated with the main axis is `flex-direction`.

### Cross Axis

The cross axis is perpendicular to the main axis and helps in positioning the elements within the flex container. The properties associated with the cross axis include:

- **`align-items`**: Aligns items along the cross axis.
- **`justify-content`**: Distributes space along the main axis.
- **`align-self`**: Aligns a specific item along the cross axis.
- **`justify-self`**: Although not a direct flexbox property, it can be used in other contexts.

### Flex Shrink

The `flex-shrink` property determines how much an element will shrink relative to the other elements in the container when there is insufficient space.

1. **Default Value:** All flex items have a default `flex-shrink` value of `1`, meaning they shrink equally when the container is smaller.
2. **Value `0`:** Prevents the element from shrinking.
3. **Values Greater than `1`:** Indicates how much faster the element should shrink compared to others.

### Flex Grow

The `flex-grow` property specifies how much an element will grow relative to the other elements in the container when there is extra space.

1. **Default Value:** `flex-grow` is set to `0` by default, meaning no additional growth is applied.
2. **Value `0`:** Prevents the element from growing.
3. **Values Greater than `0`:** Specifies the proportion of available space the element should take. For example, a value of `2` means the element grows twice as much as an element with a value of `1`.

**Note:** If a flex item has a fixed width, `flex-grow` will not work as the item is constrained to its specified size.

### Flex Basis

The `flex-basis` property specifies the initial size of an element before any remaining space is distributed among the flex items. This value can be a length (e.g., `100px`) or a keyword (`auto`).

### Flex Order

The `flex-order` property help to specify the order of your flex items in container.

### Learning

- | Error           | Correct         |
  | --------------- | --------------- |
  | .main {         | .main {         |
  | display: flex;  | display: flex;  |
  | gap: 70px;      | gap: 70px;      |
  | padding: 40px;  | padding: 40px;  |
  | }               | }               |
  |                 |                 |
  | .main section { | .main section { |
  | flex-grow: 1;   | flex-grow: 1;   |
  |                 | flex-basis: 0%; |
  | }               | }               |
  |                 |                 |
  | .main aside {   | .main aside {   |
  | width: 300px;   | width: 300px;   |
  | }               | }               |

#### Issue with the First Code

- flex-grow: 1 without `flex-basis`: - By default, when you only use flex-grow, the browser assumes a flex-basis of auto.
  auto allows the item's size to be determined by its content or any specified width or min-width. - In this case, the section element's size isn't constrained properly, so it competes with the aside for space, potentially ignoring the aside's width declaration.
  width: 300px on aside:

- While you specified a width, the flex container’s behavior can override this, especially if the sibling section grows without restrictions.

#### Why the Second Code Works

- Adding `flex-basis: 0%`:

  - Setting `flex-basis: 0%` ensures that the `section` element starts with zero intrinsic size and then grows only based on the available space and its `flex-grow` value.
  - This prevents the `section` from taking up more space than necessary initially, allowing the `aside` element to respect its `width` of `300px`.

- How it Works Together:
  - The `section` now:
    - Starts at `0%` width.
    - Grows proportionally to fill the remaining space (due to `flex-grow: 1`).
  - The `aside`:
    - Keeps its `width` at `300px` because the flexbox layout respects fixed widths for non-flexible items.

#### Key Takeaway

When using `flex-grow`, always consider the impact of `flex-basis`. By default, `flex-basis` is `auto`, which can cause unexpected behavior in layouts. Explicitly setting `flex-basis` (e.g., to `0%` or a fixed value) often resolves these issues, ensuring the desired behavior for sibling elements in a flex container.
