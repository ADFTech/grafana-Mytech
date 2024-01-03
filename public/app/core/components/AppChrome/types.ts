import { NavModelItem } from '@grafana/data';
export const TOP_BAR_LEVEL_HEIGHT = 45;

export interface ToolbarUpdateProps {
  pageNav?: NavModelItem;
  actions?: React.ReactNode;
}
