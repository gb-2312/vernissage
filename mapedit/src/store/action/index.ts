import { Point, Tool, Painting } from '../../type'

export const setTool = (tool: Tool) => ({
    type: 'ui:tool:set',
    tool,
})

export const mouseWheel = (delta: Point, pointer: Point) => ({
    type: 'ui:wheel',
    delta,
    pointer,
})

export const startDragPainting = (paintingId: string, existingId: string) => ({
    type: 'ui:dragpainting:start',
    paintingId,
    existingId,
    id: Math.random()
        .toString(16)
        .slice(2, 10),
})

export const startDragStartingPoint = () => ({
    type: 'ui:dragstartingpoint:start',
})

export const setIndication = (text: string) => ({
    type: 'indication:set',
    text,
})

export const startDrag = (pointer: Point) => ({
    type: 'ui:drag:start',
    pointer,
})

export const moveDrag = (pointer: Point) => ({
    type: 'ui:drag:move',
    pointer,
})

export const endDrag = (pointer: Point) => ({
    type: 'ui:drag:end',
    pointer,
})

export const undo = () => ({
    type: 'undo',
})

export const redo = () => ({
    type: 'redo',
})

export const hydratePaintings = paintings => ({
    type: 'http:hydrate:paintings',
    paintings,
})

export const togglePlayWindowAutoRefresh = () => ({
    type: 'playwindow:autorefresh:toggle',
})

export const openPlayWindow = () => ({
    type: 'playwindow:open',
})

export type Action =
    | {
          type: 'http:hydrate:paintings'
          paintings: Painting[]
      }
    | {
          type: 'ui:tool:set'
          tool: Tool
      }
    | {
          type: 'ui:wheel'
          delta: 1 | -1
          pointer: Point
      }
    | {
          type: 'ui:dragstartingpoint:start'
      }
    | {
          type: 'ui:drag:start'
          pointer: Point
      }
    | {
          type: 'ui:dragpainting:start'
          paintingId: string
          existingId: string
          id: string
      }
    | {
          type: 'ui:drag:move'
          pointer: Point
      }
    | {
          type: 'ui:drag:end'
          pointer: Point
      }
    | {
          type: 'undo'
      }
    | {
          type: 'redo'
      }
    | {
          type: 'playwindow:open'
      }
    | {
          type: 'playwindow:autorefresh:toggle'
      }
