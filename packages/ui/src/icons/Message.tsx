import Icon from "@ant-design/icons/lib/components/Icon";

export interface SVGComponentProps {
    width?: number;
    height?: number;
    color? : string;
}
const SVGComponent = ({width = 14,height = 14,color = "white"}: SVGComponentProps) => (



<svg width={width} height={height} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.40097 14C1.18843 13.999 0.984959 13.9138 0.835168 13.763C0.685376 13.6122 0.601492 13.4082 0.601908 13.1956C0.603769 13.1148 0.61638 13.0346 0.639408 12.9572L1.21503 10.875C1.2391 10.7981 1.21191 10.7206 1.1766 10.6594L1.16972 10.6469C1.16722 10.6428 1.15535 10.6263 1.14691 10.6141C1.13847 10.6019 1.12878 10.5887 1.12003 10.5759L1.1141 10.5675C0.38727 9.46588 -0.00010639 8.1751 3.3446e-05 6.85531C-0.00559155 5.05563 0.698471 3.35531 1.98316 2.06531C3.31253 0.733438 5.09066 8.68052e-07 6.99441 8.68052e-07C8.6094 -0.000797065 10.1765 0.548536 11.4375 1.5575C12.6703 2.54969 13.5272 3.9325 13.8503 5.45375C13.9498 5.91589 13.9999 6.38728 13.9997 6.86C13.9997 8.70156 13.2922 10.4313 12.0072 11.7309C10.711 13.0434 8.97035 13.7641 7.10628 13.7641C6.45003 13.7641 5.61035 13.5966 5.20722 13.4828C4.72222 13.3472 4.26253 13.1703 4.21191 13.1516C4.15833 13.131 4.10147 13.1205 4.0441 13.1203C3.98187 13.1199 3.92022 13.1322 3.86285 13.1562L3.83628 13.1666L1.72753 13.9284C1.62396 13.972 1.51328 13.9963 1.40097 14Z" fill={color}/>
</svg>



);

export const MessageIcon = (props: SVGComponentProps) => {
  return <Icon component={() => <SVGComponent {...props} />} />;
};