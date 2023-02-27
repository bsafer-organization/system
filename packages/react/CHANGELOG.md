# @bsafer-system/react

## 1.12.6

### Patch Changes

- Fix handle functions

## 1.12.5

### Patch Changes

- 989884d: Fix modal confirmation on click overlay

## 1.12.4

### Patch Changes

- Update version package

## 1.12.3

### Patch Changes

- 7720186: SortableSelect
  - Fix onValueChange re-render on initial state

## 1.12.2

### Patch Changes

- Fix onValuesChange function in SortableSelectProps

## 1.12.1

### Patch Changes

- Adjustments in SortableSelect
  - label text
  - disabled state
  - optional state
  - addButton text

## 1.12.0

### Minor Changes

- Added Components
  - SortableSelect - removed SortableDragAndDrop
  - Skeleton

## 1.11.1

### Patch Changes

- Fix MaskInput component:
  - Add value prop to pass inside component
  - Adjusted inputProps prop for use Partial. The `format` recursive prop shouldn't required inside `inputProps`
  - Removed required for the label prop
  - Added onClick event on endIcon prop

## 1.11.0

### Minor Changes

- Added new componente: MaskInput
- Added a confirmation dialog inside modal. This confirmation Dialog is called before `onDismiss`

## 1.10.0

### Minor Changes

- New Components and adjustments:
  - Popover
  - OverflowText
  - Modal animations

## 1.9.1

### Patch Changes

- react:
  - Input component css adjusmentes (border, disabled colors, etc)

## 1.9.0

### Minor Changes

- The modal componente was added in design system
- Input adjustments:
  - Created an click event for endIcon prop
  - Removed the required prop: label

## 1.8.0

### Minor Changes

- Event handlers called when click closeIconButton and outside the bounds of the component.

## 1.7.0

### Minor Changes

- New overlay animation;
- Close icon button only closes the dialog;
- Increasing zIndex in the overlay and content.

## 1.6.0

### Minor Changes

Select:

- Changing option to display all the text and removing text-ellipsis;
- Increasing zIndex of Menu and MenuPortal.

Dialog:

- Increasing Overlay and Content zIndex;
- Changing Overlay color.

## 1.5.0

### Minor Changes

Select component:

- Property `menuPlacement` added to component props;

Select drag-n-drop:

- Property `menuPlacement` added to component props;
- Set `menuPortalTarget` to document body.

## 1.4.1

### Patch Changes

- Table style adjustments
  - Select props and typing adjustments

## 1.4.0

### Minor Changes

- Added two new subcomponents: List and Footer
  - List: Create a scrollable list in main routes
  - Footer: Create a footer list to special routes

## 1.3.3

### Patch Changes

- Input component props adjustments

## 1.3.2

### Patch Changes

- Box:

  - Changing component props

  Select:

  - Changing component props
  - Styles adjustments

## 1.3.1

### Patch Changes

- Some fixes in toggle component: component arguments and style adjustments

## 1.3.0

### Minor Changes

- Select adjustments: padding, background color, border radius and dropdown indicator;
- Box properties rafactor: padding, background color and color;
- Features: SidebarMenu and TopHeader.

## 1.2.5

### Patch Changes

- Fix onClick button component

## 1.2.4

### Patch Changes

- Fixed display value for Badge component

## 1.2.3

### Patch Changes

- Adjusted onClick in Button Component

## 1.2.2

### Patch Changes

- Adjusted common attributes in components

## 1.2.1

### Patch Changes

- Changed windstitch to main dependences

## 1.2.0

### Minor Changes

- Reviewing all components, and general adjusted has been applied

## 1.1.1

### Patch Changes

- Fix dependences

## 1.1.0

### Minor Changes

- Component migration from other repository `system` to monorepo
- Increase tokens: border-radius, elevations

## 1.0.1

### Patch Changes

- Added files config in package.json
