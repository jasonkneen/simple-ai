"use client";

import { cn } from "@/lib/utils";
import { useRef, type HTMLAttributes } from "react";
import {
	EVENT_NODE_FILL_COLOR,
	EVENT_NODE_STROKE_COLOR,
	GATEWAY_NODE_FILL_COLOR,
	GATEWAY_NODE_STROKE_COLOR,
	TASK_NODE_FILL_COLOR,
	TASK_NODE_STROKE_COLOR,
	useWorkflowAnimation,
} from "./hooks/use-workflow-animation";

const workflows = [
	{
		id: "workflow-1",
		steps: [
			{
				nodes: [],
				paths: [],
			},
			{
				nodes: ["event-in"],
				paths: [],
			},

			{
				nodes: ["task-agent-01", "task-agent-02", "task-agent-03"],
				paths: ["path-in"],
			},
			{
				nodes: ["gateway-gate"],
				paths: ["path-01", "path-02", "path-03"],
			},
			{
				nodes: ["event-out"],
				paths: ["path-out"],
			},
		],
	},
];

export function ParallelizationWorkflow(props: HTMLAttributes<SVGSVGElement>) {
	const svgRef = useRef<SVGSVGElement>(null);

	useWorkflowAnimation({
		workflows,
		svgRef,
	});

	return (
		<svg
			ref={svgRef}
			width="1050"
			height="500"
			viewBox="0 0 1050 500"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={cn("border border-border", props.className)}
			{...props}
		>
			<title>Parallelization Workflow</title>
			<rect width="1050" height="500" fill="transparent" />
			<rect
				x="373"
				y="87.3423"
				width="191"
				height="63"
				rx="3"
				fill={TASK_NODE_FILL_COLOR}
			/>
			<rect
				id="task-agent-01"
				x="373"
				y="87.3423"
				width="191"
				height="63"
				rx="3"
				stroke={TASK_NODE_STROKE_COLOR}
				strokeWidth="2"
			/>
			<path
				d="M406.585 125.842H402.807L407.714 111.297H412.395L417.302 125.842H413.524L410.108 114.962H409.994L406.585 125.842ZM406.081 120.118H413.979V122.788H406.081V120.118ZM423.27 130.16C422.233 130.16 421.345 130.016 420.607 129.727C419.868 129.438 419.288 129.043 418.867 128.541C418.445 128.039 418.192 127.471 418.107 126.837L421.395 126.652C421.457 126.874 421.57 127.069 421.736 127.234C421.906 127.4 422.127 127.528 422.396 127.618C422.671 127.708 422.993 127.753 423.362 127.753C423.945 127.753 424.425 127.611 424.804 127.327C425.188 127.047 425.379 126.557 425.379 125.856V123.939H425.259C425.121 124.275 424.913 124.576 424.634 124.841C424.354 125.106 424.006 125.314 423.59 125.466C423.178 125.617 422.704 125.693 422.169 125.693C421.374 125.693 420.645 125.508 419.982 125.139C419.324 124.765 418.796 124.187 418.398 123.406C418.005 122.62 417.808 121.609 417.808 120.374C417.808 119.1 418.012 118.051 418.419 117.227C418.826 116.399 419.359 115.785 420.017 115.388C420.68 114.99 421.393 114.791 422.155 114.791C422.728 114.791 423.218 114.891 423.625 115.089C424.037 115.284 424.376 115.535 424.641 115.842C424.906 116.15 425.107 116.47 425.244 116.801H425.344V114.933H428.803V125.885C428.803 126.808 428.571 127.587 428.107 128.222C427.643 128.856 426.994 129.337 426.161 129.663C425.327 129.995 424.364 130.16 423.27 130.16ZM423.377 123.165C423.798 123.165 424.158 123.053 424.456 122.831C424.754 122.608 424.984 122.289 425.145 121.872C425.306 121.455 425.387 120.956 425.387 120.374C425.387 119.782 425.306 119.273 425.145 118.847C424.989 118.416 424.759 118.084 424.456 117.852C424.158 117.62 423.798 117.504 423.377 117.504C422.946 117.504 422.581 117.623 422.283 117.859C421.985 118.096 421.757 118.43 421.601 118.861C421.45 119.287 421.374 119.791 421.374 120.374C421.374 120.956 421.452 121.455 421.608 121.872C421.764 122.289 421.989 122.608 422.283 122.831C422.581 123.053 422.946 123.165 423.377 123.165ZM436.116 126.048C434.975 126.048 433.99 125.823 433.162 125.374C432.338 124.919 431.703 124.273 431.258 123.435C430.818 122.592 430.598 121.59 430.598 120.43C430.598 119.303 430.82 118.319 431.265 117.476C431.711 116.628 432.338 115.97 433.148 115.501C433.957 115.028 434.911 114.791 436.01 114.791C436.786 114.791 437.497 114.912 438.14 115.153C438.784 115.395 439.341 115.752 439.809 116.226C440.278 116.699 440.643 117.284 440.903 117.98C441.164 118.671 441.294 119.464 441.294 120.359V121.226H431.812V119.209H438.062C438.058 118.839 437.97 118.51 437.8 118.222C437.629 117.933 437.395 117.708 437.096 117.547C436.803 117.381 436.464 117.298 436.081 117.298C435.693 117.298 435.345 117.386 435.037 117.561C434.729 117.731 434.485 117.966 434.305 118.264C434.125 118.558 434.031 118.892 434.021 119.266V121.318C434.021 121.763 434.109 122.154 434.284 122.49C434.459 122.821 434.708 123.08 435.03 123.264C435.352 123.449 435.735 123.541 436.18 123.541C436.488 123.541 436.767 123.499 437.018 123.413C437.269 123.328 437.485 123.203 437.665 123.037C437.845 122.871 437.979 122.668 438.069 122.426L441.258 122.518C441.126 123.233 440.835 123.856 440.385 124.386C439.94 124.912 439.355 125.321 438.631 125.615C437.906 125.904 437.068 126.048 436.116 126.048ZM446.541 119.621V125.842H443.068V114.933H446.37V116.936H446.491C446.732 116.268 447.144 115.745 447.727 115.366C448.309 114.983 449.003 114.791 449.808 114.791C450.575 114.791 451.24 114.964 451.803 115.31C452.372 115.651 452.812 116.129 453.124 116.744C453.442 117.355 453.598 118.07 453.593 118.889V125.842H450.12V119.571C450.125 118.965 449.971 118.491 449.659 118.151C449.351 117.81 448.922 117.639 448.373 117.639C448.008 117.639 447.686 117.72 447.407 117.881C447.133 118.037 446.919 118.262 446.768 118.555C446.621 118.849 446.545 119.204 446.541 119.621ZM461.901 114.933V117.49H455.019V114.933H461.901ZM456.461 112.32H459.934V122.412C459.934 122.625 459.967 122.798 460.033 122.93C460.104 123.058 460.206 123.151 460.339 123.207C460.471 123.259 460.63 123.285 460.814 123.285C460.947 123.285 461.087 123.274 461.233 123.25C461.385 123.222 461.499 123.198 461.574 123.179L462.1 125.686C461.934 125.733 461.7 125.793 461.397 125.864C461.099 125.935 460.741 125.98 460.324 125.999C459.51 126.036 458.812 125.942 458.229 125.714C457.652 125.482 457.209 125.123 456.901 124.635C456.598 124.147 456.451 123.534 456.461 122.795V112.32ZM474.703 110.615L470.015 128.03H467.054L471.741 110.615H474.703ZM480.294 125.842V111.297H483.81V122.987H489.861V125.842H480.294ZM491.681 125.842V111.297H495.197V122.987H501.248V125.842H491.681ZM503.068 111.297H507.421L511.115 120.303H511.285L514.978 111.297H519.332V125.842H515.909V116.908H515.788L512.294 125.75H510.106L506.612 116.858H506.491V125.842H503.068V111.297ZM532.519 111.297V125.842H529.01V114.578H528.925L525.672 116.567V113.527L529.259 111.297H532.519Z"
				fill="#0F631C"
			/>
			<rect
				x="718.782"
				y="173.051"
				width="108"
				height="108"
				rx="3"
				transform="rotate(45 718.782 173.051)"
				fill={GATEWAY_NODE_FILL_COLOR}
			/>
			<rect
				id="gateway-gate"
				x="718.782"
				y="173.051"
				width="108"
				height="108"
				rx="3"
				transform="rotate(45 718.782 173.051)"
				stroke={GATEWAY_NODE_STROKE_COLOR}
				strokeWidth="2"
			/>
			<path
				d="M666.509 249H662.73L667.638 234.455H672.319L677.226 249H673.448L670.032 238.119H669.918L666.509 249ZM666.005 243.276H673.902V245.946H666.005V243.276ZM683.194 253.318C682.157 253.318 681.269 253.174 680.531 252.885C679.792 252.596 679.212 252.201 678.79 251.699C678.369 251.197 678.116 250.629 678.031 249.994L681.319 249.81C681.38 250.032 681.494 250.226 681.66 250.392C681.83 250.558 682.05 250.686 682.32 250.776C682.595 250.866 682.917 250.911 683.286 250.911C683.869 250.911 684.349 250.768 684.728 250.484C685.112 250.205 685.303 249.715 685.303 249.014V247.097H685.183C685.045 247.433 684.837 247.733 684.558 247.999C684.278 248.264 683.93 248.472 683.513 248.624C683.102 248.775 682.628 248.851 682.093 248.851C681.298 248.851 680.568 248.666 679.906 248.297C679.247 247.923 678.719 247.345 678.322 246.564C677.929 245.778 677.732 244.767 677.732 243.531C677.732 242.258 677.936 241.209 678.343 240.385C678.75 239.556 679.283 238.943 679.941 238.545C680.604 238.148 681.317 237.949 682.079 237.949C682.652 237.949 683.142 238.048 683.549 238.247C683.961 238.441 684.299 238.692 684.565 239C684.83 239.308 685.031 239.627 685.168 239.959H685.268V238.091H688.727V249.043C688.727 249.966 688.495 250.745 688.031 251.379C687.567 252.014 686.918 252.494 686.085 252.821C685.251 253.152 684.288 253.318 683.194 253.318ZM683.3 246.322C683.722 246.322 684.082 246.211 684.38 245.989C684.678 245.766 684.908 245.446 685.069 245.03C685.23 244.613 685.31 244.114 685.31 243.531C685.31 242.939 685.23 242.43 685.069 242.004C684.913 241.573 684.683 241.242 684.38 241.01C684.082 240.778 683.722 240.662 683.3 240.662C682.87 240.662 682.505 240.78 682.207 241.017C681.908 241.254 681.681 241.588 681.525 242.018C681.373 242.445 681.298 242.949 681.298 243.531C681.298 244.114 681.376 244.613 681.532 245.03C681.688 245.446 681.913 245.766 682.207 245.989C682.505 246.211 682.87 246.322 683.3 246.322ZM696.026 253.318C694.989 253.318 694.101 253.174 693.363 252.885C692.624 252.596 692.044 252.201 691.623 251.699C691.201 251.197 690.948 250.629 690.863 249.994L694.151 249.81C694.212 250.032 694.326 250.226 694.492 250.392C694.662 250.558 694.882 250.686 695.152 250.776C695.427 250.866 695.749 250.911 696.118 250.911C696.701 250.911 697.181 250.768 697.56 250.484C697.944 250.205 698.135 249.715 698.135 249.014V247.097H698.015C697.877 247.433 697.669 247.733 697.39 247.999C697.11 248.264 696.762 248.472 696.346 248.624C695.934 248.775 695.46 248.851 694.925 248.851C694.13 248.851 693.4 248.666 692.738 248.297C692.079 247.923 691.551 247.345 691.154 246.564C690.761 245.778 690.564 244.767 690.564 243.531C690.564 242.258 690.768 241.209 691.175 240.385C691.582 239.556 692.115 238.943 692.773 238.545C693.436 238.148 694.149 237.949 694.911 237.949C695.484 237.949 695.974 238.048 696.381 238.247C696.793 238.441 697.132 238.692 697.397 239C697.662 239.308 697.863 239.627 698 239.959H698.1V238.091H701.559V249.043C701.559 249.966 701.327 250.745 700.863 251.379C700.399 252.014 699.75 252.494 698.917 252.821C698.083 253.152 697.12 253.318 696.026 253.318ZM696.132 246.322C696.554 246.322 696.914 246.211 697.212 245.989C697.51 245.766 697.74 245.446 697.901 245.03C698.062 244.613 698.142 244.114 698.142 243.531C698.142 242.939 698.062 242.43 697.901 242.004C697.745 241.573 697.515 241.242 697.212 241.01C696.914 240.778 696.554 240.662 696.132 240.662C695.702 240.662 695.337 240.78 695.039 241.017C694.74 241.254 694.513 241.588 694.357 242.018C694.205 242.445 694.13 242.949 694.13 243.531C694.13 244.114 694.208 244.613 694.364 245.03C694.52 245.446 694.745 245.766 695.039 245.989C695.337 246.211 695.702 246.322 696.132 246.322ZM703.773 249V238.091H707.146V240.08H707.26C707.459 239.36 707.783 238.825 708.233 238.474C708.683 238.119 709.206 237.942 709.803 237.942C709.964 237.942 710.129 237.954 710.3 237.977C710.47 237.996 710.629 238.027 710.776 238.07V241.088C710.61 241.031 710.392 240.986 710.122 240.953C709.857 240.92 709.62 240.903 709.412 240.903C709 240.903 708.628 240.996 708.297 241.18C707.97 241.36 707.712 241.614 707.523 241.94C707.338 242.262 707.246 242.641 707.246 243.077V249H703.773ZM716.724 249.206C715.583 249.206 714.598 248.981 713.769 248.531C712.945 248.077 712.311 247.43 711.866 246.592C711.425 245.75 711.205 244.748 711.205 243.588C711.205 242.461 711.428 241.476 711.873 240.634C712.318 239.786 712.945 239.128 713.755 238.659C714.565 238.186 715.519 237.949 716.617 237.949C717.394 237.949 718.104 238.07 718.748 238.311C719.392 238.553 719.948 238.91 720.417 239.384C720.886 239.857 721.25 240.442 721.511 241.138C721.771 241.829 721.901 242.622 721.901 243.517V244.384H712.42V242.366H718.67C718.665 241.997 718.577 241.668 718.407 241.379C718.237 241.09 718.002 240.866 717.704 240.705C717.41 240.539 717.072 240.456 716.688 240.456C716.3 240.456 715.952 240.544 715.644 240.719C715.336 240.889 715.093 241.124 714.913 241.422C714.733 241.715 714.638 242.049 714.629 242.423V244.476C714.629 244.921 714.716 245.312 714.891 245.648C715.067 245.979 715.315 246.237 715.637 246.422C715.959 246.607 716.343 246.699 716.788 246.699C717.095 246.699 717.375 246.656 717.626 246.571C717.877 246.486 718.092 246.36 718.272 246.195C718.452 246.029 718.587 245.825 718.677 245.584L721.866 245.676C721.733 246.391 721.442 247.014 720.992 247.544C720.547 248.07 719.962 248.479 719.238 248.773C718.513 249.062 717.675 249.206 716.724 249.206ZM728.76 253.318C727.723 253.318 726.836 253.174 726.097 252.885C725.358 252.596 724.778 252.201 724.357 251.699C723.935 251.197 723.682 250.629 723.597 249.994L726.885 249.81C726.947 250.032 727.06 250.226 727.226 250.392C727.397 250.558 727.617 250.686 727.887 250.776C728.161 250.866 728.483 250.911 728.853 250.911C729.435 250.911 729.916 250.768 730.294 250.484C730.678 250.205 730.87 249.715 730.87 249.014V247.097H730.749C730.612 247.433 730.403 247.733 730.124 247.999C729.845 248.264 729.497 248.472 729.08 248.624C728.668 248.775 728.194 248.851 727.659 248.851C726.864 248.851 726.135 248.666 725.472 248.297C724.814 247.923 724.286 247.345 723.888 246.564C723.495 245.778 723.299 244.767 723.299 243.531C723.299 242.258 723.502 241.209 723.909 240.385C724.317 239.556 724.849 238.943 725.507 238.545C726.17 238.148 726.883 237.949 727.645 237.949C728.218 237.949 728.708 238.048 729.115 238.247C729.527 238.441 729.866 238.692 730.131 239C730.396 239.308 730.597 239.627 730.735 239.959H730.834V238.091H734.293V249.043C734.293 249.966 734.061 250.745 733.597 251.379C733.133 252.014 732.484 252.494 731.651 252.821C730.818 253.152 729.854 253.318 728.76 253.318ZM728.867 246.322C729.288 246.322 729.648 246.211 729.946 245.989C730.245 245.766 730.474 245.446 730.635 245.03C730.796 244.613 730.877 244.114 730.877 243.531C730.877 242.939 730.796 242.43 730.635 242.004C730.479 241.573 730.249 241.242 729.946 241.01C729.648 240.778 729.288 240.662 728.867 240.662C728.436 240.662 728.071 240.78 727.773 241.017C727.475 241.254 727.248 241.588 727.091 242.018C726.94 242.445 726.864 242.949 726.864 243.531C726.864 244.114 726.942 244.613 727.098 245.03C727.255 245.446 727.48 245.766 727.773 245.989C728.071 246.211 728.436 246.322 728.867 246.322ZM739.582 249.185C738.886 249.185 738.268 249.069 737.729 248.837C737.194 248.6 736.77 248.245 736.457 247.771C736.15 247.293 735.996 246.694 735.996 245.974C735.996 245.368 736.102 244.857 736.315 244.44C736.528 244.024 736.822 243.685 737.196 243.425C737.57 243.164 738.001 242.968 738.489 242.835C738.976 242.698 739.497 242.606 740.051 242.558C740.671 242.501 741.171 242.442 741.55 242.381C741.928 242.314 742.203 242.222 742.374 242.104C742.549 241.981 742.636 241.808 742.636 241.585V241.55C742.636 241.185 742.511 240.903 742.26 240.705C742.009 240.506 741.67 240.406 741.244 240.406C740.785 240.406 740.416 240.506 740.136 240.705C739.857 240.903 739.679 241.178 739.604 241.528L736.401 241.415C736.495 240.752 736.739 240.16 737.132 239.639C737.53 239.114 738.074 238.702 738.766 238.403C739.462 238.1 740.297 237.949 741.273 237.949C741.969 237.949 742.61 238.032 743.197 238.197C743.785 238.358 744.296 238.595 744.732 238.908C745.167 239.215 745.503 239.594 745.74 240.044C745.982 240.494 746.102 241.008 746.102 241.585V249H742.835V247.48H742.75C742.556 247.849 742.307 248.162 742.004 248.418C741.706 248.673 741.353 248.865 740.946 248.993C740.544 249.121 740.089 249.185 739.582 249.185ZM740.655 246.912C741.029 246.912 741.365 246.836 741.663 246.685C741.966 246.533 742.208 246.325 742.388 246.06C742.568 245.79 742.658 245.477 742.658 245.122V244.085C742.558 244.137 742.437 244.185 742.295 244.227C742.158 244.27 742.007 244.31 741.841 244.348C741.675 244.386 741.505 244.419 741.33 244.447C741.154 244.476 740.986 244.502 740.825 244.526C740.499 244.578 740.219 244.658 739.987 244.767C739.76 244.876 739.585 245.018 739.462 245.193C739.343 245.364 739.284 245.567 739.284 245.804C739.284 246.164 739.412 246.438 739.668 246.628C739.928 246.817 740.257 246.912 740.655 246.912ZM754.384 238.091V240.648H747.501V238.091H754.384ZM748.943 235.477H752.416V245.57C752.416 245.783 752.449 245.955 752.516 246.088C752.587 246.216 752.688 246.308 752.821 246.365C752.954 246.417 753.112 246.443 753.297 246.443C753.429 246.443 753.569 246.431 753.716 246.408C753.867 246.379 753.981 246.356 754.057 246.337L754.582 248.844C754.417 248.891 754.182 248.95 753.879 249.021C753.581 249.092 753.223 249.137 752.807 249.156C751.992 249.194 751.294 249.099 750.712 248.872C750.134 248.64 749.691 248.28 749.384 247.793C749.08 247.305 748.934 246.692 748.943 245.953V235.477ZM761.131 249.206C759.985 249.206 759 248.972 758.176 248.503C757.357 248.029 756.725 247.371 756.28 246.528C755.839 245.681 755.619 244.698 755.619 243.581C755.619 242.459 755.839 241.476 756.28 240.634C756.725 239.786 757.357 239.128 758.176 238.659C759 238.186 759.985 237.949 761.131 237.949C762.277 237.949 763.259 238.186 764.078 238.659C764.902 239.128 765.534 239.786 765.974 240.634C766.42 241.476 766.642 242.459 766.642 243.581C766.642 244.698 766.42 245.681 765.974 246.528C765.534 247.371 764.902 248.029 764.078 248.503C763.259 248.972 762.277 249.206 761.131 249.206ZM761.152 246.585C761.569 246.585 761.921 246.457 762.21 246.202C762.499 245.946 762.719 245.591 762.871 245.136C763.027 244.682 763.105 244.156 763.105 243.56C763.105 242.954 763.027 242.423 762.871 241.969C762.719 241.514 762.499 241.159 762.21 240.903C761.921 240.648 761.569 240.52 761.152 240.52C760.721 240.52 760.357 240.648 760.058 240.903C759.765 241.159 759.54 241.514 759.384 241.969C759.232 242.423 759.156 242.954 759.156 243.56C759.156 244.156 759.232 244.682 759.384 245.136C759.54 245.591 759.765 245.946 760.058 246.202C760.357 246.457 760.721 246.585 761.152 246.585ZM768.421 249V238.091H771.795V240.08H771.908C772.107 239.36 772.432 238.825 772.881 238.474C773.331 238.119 773.854 237.942 774.451 237.942C774.612 237.942 774.778 237.954 774.948 237.977C775.119 237.996 775.277 238.027 775.424 238.07V241.088C775.258 241.031 775.04 240.986 774.771 240.953C774.505 240.92 774.269 240.903 774.06 240.903C773.648 240.903 773.277 240.996 772.945 241.18C772.619 241.36 772.361 241.614 772.171 241.94C771.986 242.262 771.894 242.641 771.894 243.077V249H768.421ZM702.205 257.773L697.517 275.187H694.556L699.243 257.773H702.205ZM707.796 273V258.455H711.312V270.145H717.363V273H707.796ZM719.183 273V258.455H722.699V270.145H728.75V273H719.183ZM730.57 258.455H734.923L738.616 267.46H738.787L742.48 258.455H746.834V273H743.411V264.065H743.29L739.795 272.908H737.608L734.114 264.016H733.993V273H730.57V258.455Z"
				fill={GATEWAY_NODE_STROKE_COLOR}
			/>
			<rect
				x="877"
				y="204.637"
				width="88"
				height="88"
				rx="44"
				fill={EVENT_NODE_FILL_COLOR}
			/>
			<rect
				id="event-out"
				x="877"
				y="204.637"
				width="88"
				height="88"
				rx="44"
				stroke={EVENT_NODE_STROKE_COLOR}
				strokeWidth="2"
			/>
			<path
				d="M917.617 248.364C917.617 249.964 917.309 251.321 916.693 252.434C916.078 253.546 915.244 254.391 914.193 254.969C913.147 255.547 911.973 255.836 910.671 255.836C909.364 255.836 908.187 255.544 907.141 254.962C906.094 254.38 905.263 253.534 904.648 252.426C904.037 251.314 903.732 249.96 903.732 248.364C903.732 246.764 904.037 245.407 904.648 244.294C905.263 243.182 906.094 242.337 907.141 241.759C908.187 241.181 909.364 240.892 910.671 240.892C911.973 240.892 913.147 241.181 914.193 241.759C915.244 242.337 916.078 243.182 916.693 244.294C917.309 245.407 917.617 246.764 917.617 248.364ZM914.023 248.364C914.023 247.417 913.888 246.617 913.618 245.963C913.353 245.31 912.969 244.815 912.468 244.479C911.97 244.143 911.371 243.975 910.671 243.975C909.975 243.975 909.376 244.143 908.874 244.479C908.372 244.815 907.986 245.31 907.716 245.963C907.451 246.617 907.318 247.417 907.318 248.364C907.318 249.311 907.451 250.111 907.716 250.765C907.986 251.418 908.372 251.913 908.874 252.249C909.376 252.585 909.975 252.753 910.671 252.753C911.371 252.753 911.97 252.585 912.468 252.249C912.969 251.913 913.353 251.418 913.618 250.765C913.888 250.111 914.023 249.311 914.023 248.364ZM926.708 250.928V244.728H930.173V255.637H926.864V253.605H926.75C926.509 254.273 926.097 254.803 925.514 255.196C924.937 255.585 924.238 255.779 923.419 255.779C922.676 255.779 922.022 255.608 921.459 255.267C920.896 254.926 920.458 254.451 920.145 253.84C919.833 253.224 919.674 252.505 919.669 251.681V244.728H923.142V250.999C923.147 251.591 923.303 252.057 923.611 252.398C923.919 252.739 924.338 252.909 924.868 252.909C925.214 252.909 925.524 252.834 925.798 252.682C926.078 252.526 926.298 252.301 926.459 252.007C926.625 251.709 926.708 251.349 926.708 250.928ZM938.542 244.728V247.284H931.66V244.728H938.542ZM933.101 242.114H936.574V252.206C936.574 252.419 936.608 252.592 936.674 252.725C936.745 252.853 936.847 252.945 936.979 253.002C937.112 253.054 937.27 253.08 937.455 253.08C937.588 253.08 937.727 253.068 937.874 253.044C938.026 253.016 938.139 252.992 938.215 252.973L938.741 255.48C938.575 255.528 938.34 255.587 938.037 255.658C937.739 255.729 937.382 255.774 936.965 255.793C936.151 255.831 935.452 255.736 934.87 255.509C934.292 255.277 933.849 254.917 933.542 254.429C933.239 253.942 933.092 253.328 933.101 252.59V242.114Z"
				fill={EVENT_NODE_STROKE_COLOR}
			/>
			<rect
				x="84"
				y="206"
				width="88"
				height="88"
				rx="44"
				fill={EVENT_NODE_FILL_COLOR}
			/>
			<rect
				id="event-in"
				x="84"
				y="206"
				width="88"
				height="88"
				rx="44"
				stroke={EVENT_NODE_STROKE_COLOR}
				strokeWidth="2"
			/>
			<path
				d="M123.417 242.455V257H119.902V242.455H123.417ZM129.097 250.778V257H125.624V246.091H128.927V248.094H129.048C129.289 247.426 129.701 246.903 130.283 246.524C130.866 246.141 131.559 245.949 132.364 245.949C133.131 245.949 133.797 246.122 134.36 246.467C134.928 246.808 135.369 247.286 135.681 247.902C135.998 248.513 136.155 249.228 136.15 250.047V257H132.677V250.729C132.682 250.123 132.528 249.649 132.215 249.308C131.907 248.967 131.479 248.797 130.93 248.797C130.565 248.797 130.243 248.877 129.964 249.038C129.689 249.195 129.476 249.42 129.325 249.713C129.178 250.007 129.102 250.362 129.097 250.778Z"
				fill={EVENT_NODE_STROKE_COLOR}
			/>
			<rect
				x="373"
				y="217.342"
				width="191"
				height="63"
				rx="3"
				fill={TASK_NODE_FILL_COLOR}
			/>
			<rect
				id="task-agent-02"
				x="373"
				y="217.342"
				width="191"
				height="63"
				rx="3"
				stroke={TASK_NODE_STROKE_COLOR}
				strokeWidth="2"
			/>
			<path
				d="M405.179 255.842H401.4L406.308 241.297H410.988L415.896 255.842H412.118L408.702 244.962H408.588L405.179 255.842ZM404.675 250.118H412.572V252.788H404.675V250.118ZM421.864 260.16C420.827 260.16 419.939 260.016 419.2 259.727C418.462 259.438 417.882 259.043 417.46 258.541C417.039 258.039 416.786 257.471 416.7 256.837L419.989 256.652C420.05 256.874 420.164 257.069 420.33 257.234C420.5 257.4 420.72 257.528 420.99 257.618C421.265 257.708 421.587 257.753 421.956 257.753C422.539 257.753 423.019 257.611 423.398 257.327C423.781 257.047 423.973 256.557 423.973 255.856V253.939H423.852C423.715 254.275 423.507 254.576 423.227 254.841C422.948 255.106 422.6 255.314 422.183 255.466C421.771 255.617 421.298 255.693 420.763 255.693C419.968 255.693 419.238 255.508 418.575 255.139C417.917 254.765 417.389 254.187 416.992 253.406C416.599 252.62 416.402 251.609 416.402 250.374C416.402 249.1 416.606 248.051 417.013 247.227C417.42 246.399 417.953 245.785 418.611 245.388C419.274 244.99 419.986 244.791 420.749 244.791C421.322 244.791 421.812 244.891 422.219 245.089C422.631 245.284 422.969 245.535 423.235 245.842C423.5 246.15 423.701 246.47 423.838 246.801H423.938V244.933H427.396V255.885C427.396 256.808 427.164 257.587 426.7 258.222C426.236 258.856 425.588 259.337 424.754 259.663C423.921 259.995 422.958 260.16 421.864 260.16ZM421.97 253.165C422.392 253.165 422.752 253.053 423.05 252.831C423.348 252.608 423.578 252.289 423.739 251.872C423.9 251.455 423.98 250.956 423.98 250.374C423.98 249.782 423.9 249.273 423.739 248.847C423.583 248.416 423.353 248.084 423.05 247.852C422.752 247.62 422.392 247.504 421.97 247.504C421.539 247.504 421.175 247.623 420.877 247.859C420.578 248.096 420.351 248.43 420.195 248.861C420.043 249.287 419.968 249.791 419.968 250.374C419.968 250.956 420.046 251.455 420.202 251.872C420.358 252.289 420.583 252.608 420.877 252.831C421.175 253.053 421.539 253.165 421.97 253.165ZM434.71 256.048C433.569 256.048 432.584 255.823 431.756 255.374C430.932 254.919 430.297 254.273 429.852 253.435C429.412 252.592 429.192 251.59 429.192 250.43C429.192 249.303 429.414 248.319 429.859 247.476C430.304 246.628 430.932 245.97 431.741 245.501C432.551 245.028 433.505 244.791 434.604 244.791C435.38 244.791 436.09 244.912 436.734 245.153C437.378 245.395 437.934 245.752 438.403 246.226C438.872 246.699 439.237 247.284 439.497 247.98C439.757 248.671 439.888 249.464 439.888 250.359V251.226H430.406V249.209H436.656C436.651 248.839 436.564 248.51 436.393 248.222C436.223 247.933 435.988 247.708 435.69 247.547C435.397 247.381 435.058 247.298 434.675 247.298C434.286 247.298 433.938 247.386 433.631 247.561C433.323 247.731 433.079 247.966 432.899 248.264C432.719 248.558 432.624 248.892 432.615 249.266V251.318C432.615 251.763 432.702 252.154 432.878 252.49C433.053 252.821 433.301 253.08 433.623 253.264C433.945 253.449 434.329 253.541 434.774 253.541C435.082 253.541 435.361 253.499 435.612 253.413C435.863 253.328 436.078 253.203 436.258 253.037C436.438 252.871 436.573 252.668 436.663 252.426L439.852 252.518C439.72 253.233 439.428 253.856 438.979 254.386C438.533 254.912 437.949 255.321 437.224 255.615C436.5 255.904 435.662 256.048 434.71 256.048ZM445.134 249.621V255.842H441.661V244.933H444.964V246.936H445.085C445.326 246.268 445.738 245.745 446.32 245.366C446.903 244.983 447.597 244.791 448.401 244.791C449.169 244.791 449.834 244.964 450.397 245.31C450.965 245.651 451.406 246.129 451.718 246.744C452.035 247.355 452.192 248.07 452.187 248.889V255.842H448.714V249.571C448.719 248.965 448.565 248.491 448.252 248.151C447.945 247.81 447.516 247.639 446.967 247.639C446.602 247.639 446.28 247.72 446.001 247.881C445.726 248.037 445.513 248.262 445.362 248.555C445.215 248.849 445.139 249.204 445.134 249.621ZM460.495 244.933V247.49H453.613V244.933H460.495ZM455.055 242.32H458.528V252.412C458.528 252.625 458.561 252.798 458.627 252.93C458.698 253.058 458.8 253.151 458.932 253.207C459.065 253.259 459.224 253.285 459.408 253.285C459.541 253.285 459.68 253.274 459.827 253.25C459.979 253.222 460.092 253.198 460.168 253.179L460.694 255.686C460.528 255.733 460.294 255.793 459.991 255.864C459.692 255.935 459.335 255.98 458.918 255.999C458.104 256.036 457.405 255.942 456.823 255.714C456.245 255.482 455.803 255.123 455.495 254.635C455.192 254.147 455.045 253.534 455.055 252.795V242.32ZM473.297 240.615L468.609 258.03H465.648L470.335 240.615H473.297ZM478.888 255.842V241.297H482.404V252.987H488.455V255.842H478.888ZM490.275 255.842V241.297H493.79V252.987H499.841V255.842H490.275ZM501.661 241.297H506.015L509.708 250.303H509.879L513.572 241.297H517.926V255.842H514.502V246.908H514.382L510.887 255.75H508.7L505.205 246.858H505.085V255.842H501.661V241.297ZM524.387 255.842V253.314L529.692 248.669C530.09 248.309 530.429 247.98 530.708 247.682C530.987 247.379 531.2 247.076 531.347 246.773C531.494 246.465 531.567 246.131 531.567 245.771C531.567 245.369 531.48 245.026 531.305 244.741C531.129 244.453 530.888 244.23 530.58 244.074C530.272 243.918 529.92 243.839 529.522 243.839C529.119 243.839 528.767 243.922 528.464 244.088C528.161 244.249 527.924 244.483 527.753 244.791C527.588 245.099 527.505 245.473 527.505 245.913H524.174C524.174 244.924 524.396 244.069 524.841 243.349C525.287 242.63 525.912 242.076 526.716 241.687C527.526 241.294 528.466 241.098 529.536 241.098C530.639 241.098 531.598 241.283 532.412 241.652C533.227 242.021 533.857 242.537 534.302 243.2C534.751 243.858 534.976 244.623 534.976 245.494C534.976 246.048 534.865 246.597 534.643 247.142C534.42 247.687 534.02 248.288 533.442 248.946C532.869 249.604 532.055 250.392 530.999 251.311L529.259 252.916V253.008H535.154V255.842H524.387Z"
				fill="#0F631C"
			/>
			<rect
				x="373"
				y="347.342"
				width="191"
				height="63"
				rx="3"
				fill={TASK_NODE_FILL_COLOR}
			/>
			<rect
				id="task-agent-03"
				x="373"
				y="347.342"
				width="191"
				height="63"
				rx="3"
				stroke={TASK_NODE_STROKE_COLOR}
				strokeWidth="2"
			/>
			<path
				d="M404.886 385.842H401.107L406.015 371.297H410.695L415.603 385.842H411.825L408.409 374.962H408.295L404.886 385.842ZM404.382 380.118H412.279V382.788H404.382V380.118ZM421.571 390.16C420.534 390.16 419.646 390.016 418.907 389.727C418.169 389.438 417.589 389.043 417.167 388.541C416.746 388.039 416.493 387.471 416.407 386.837L419.696 386.652C419.757 386.874 419.871 387.069 420.037 387.234C420.207 387.4 420.427 387.528 420.697 387.618C420.972 387.708 421.294 387.753 421.663 387.753C422.246 387.753 422.726 387.611 423.105 387.327C423.488 387.047 423.68 386.557 423.68 385.856V383.939H423.559C423.422 384.275 423.214 384.576 422.934 384.841C422.655 385.106 422.307 385.314 421.89 385.466C421.479 385.617 421.005 385.693 420.47 385.693C419.675 385.693 418.945 385.508 418.282 385.139C417.624 384.765 417.096 384.187 416.699 383.406C416.306 382.62 416.109 381.609 416.109 380.374C416.109 379.1 416.313 378.051 416.72 377.227C417.127 376.399 417.66 375.785 418.318 375.388C418.981 374.99 419.693 374.791 420.456 374.791C421.029 374.791 421.519 374.891 421.926 375.089C422.338 375.284 422.676 375.535 422.942 375.842C423.207 376.15 423.408 376.47 423.545 376.801H423.645V374.933H427.104V385.885C427.104 386.808 426.872 387.587 426.407 388.222C425.943 388.856 425.295 389.337 424.461 389.663C423.628 389.995 422.665 390.16 421.571 390.16ZM421.677 383.165C422.099 383.165 422.459 383.053 422.757 382.831C423.055 382.608 423.285 382.289 423.446 381.872C423.607 381.455 423.687 380.956 423.687 380.374C423.687 379.782 423.607 379.273 423.446 378.847C423.29 378.416 423.06 378.084 422.757 377.852C422.459 377.62 422.099 377.504 421.677 377.504C421.247 377.504 420.882 377.623 420.584 377.859C420.285 378.096 420.058 378.43 419.902 378.861C419.75 379.287 419.675 379.791 419.675 380.374C419.675 380.956 419.753 381.455 419.909 381.872C420.065 382.289 420.29 382.608 420.584 382.831C420.882 383.053 421.247 383.165 421.677 383.165ZM434.417 386.048C433.276 386.048 432.291 385.823 431.463 385.374C430.639 384.919 430.004 384.273 429.559 383.435C429.119 382.592 428.899 381.59 428.899 380.43C428.899 379.303 429.121 378.319 429.566 377.476C430.011 376.628 430.639 375.97 431.448 375.501C432.258 375.028 433.212 374.791 434.311 374.791C435.087 374.791 435.797 374.912 436.441 375.153C437.085 375.395 437.642 375.752 438.11 376.226C438.579 376.699 438.944 377.284 439.204 377.98C439.464 378.671 439.595 379.464 439.595 380.359V381.226H430.113V379.209H436.363C436.358 378.839 436.271 378.51 436.1 378.222C435.93 377.933 435.695 377.708 435.397 377.547C435.104 377.381 434.765 377.298 434.382 377.298C433.993 377.298 433.645 377.386 433.338 377.561C433.03 377.731 432.786 377.966 432.606 378.264C432.426 378.558 432.331 378.892 432.322 379.266V381.318C432.322 381.763 432.41 382.154 432.585 382.49C432.76 382.821 433.008 383.08 433.33 383.264C433.652 383.449 434.036 383.541 434.481 383.541C434.789 383.541 435.068 383.499 435.319 383.413C435.57 383.328 435.785 383.203 435.965 383.037C436.145 382.871 436.28 382.668 436.37 382.426L439.559 382.518C439.427 383.233 439.135 383.856 438.686 384.386C438.24 384.912 437.656 385.321 436.931 385.615C436.207 385.904 435.369 386.048 434.417 386.048ZM444.841 379.621V385.842H441.368V374.933H444.671V376.936H444.792C445.033 376.268 445.445 375.745 446.028 375.366C446.61 374.983 447.304 374.791 448.108 374.791C448.876 374.791 449.541 374.964 450.104 375.31C450.672 375.651 451.113 376.129 451.425 376.744C451.742 377.355 451.899 378.07 451.894 378.889V385.842H448.421V379.571C448.426 378.965 448.272 378.491 447.959 378.151C447.652 377.81 447.223 377.639 446.674 377.639C446.309 377.639 445.987 377.72 445.708 377.881C445.433 378.037 445.22 378.262 445.069 378.555C444.922 378.849 444.846 379.204 444.841 379.621ZM460.202 374.933V377.49H453.32V374.933H460.202ZM454.762 372.32H458.235V382.412C458.235 382.625 458.268 382.798 458.334 382.93C458.405 383.058 458.507 383.151 458.639 383.207C458.772 383.259 458.931 383.285 459.115 383.285C459.248 383.285 459.387 383.274 459.534 383.25C459.686 383.222 459.799 383.198 459.875 383.179L460.401 385.686C460.235 385.733 460.001 385.793 459.698 385.864C459.399 385.935 459.042 385.98 458.625 385.999C457.811 386.036 457.112 385.942 456.53 385.714C455.952 385.482 455.51 385.123 455.202 384.635C454.899 384.147 454.752 383.534 454.762 382.795V372.32ZM473.004 370.615L468.316 388.03H465.355L470.042 370.615H473.004ZM478.595 385.842V371.297H482.111V382.987H488.162V385.842H478.595ZM489.982 385.842V371.297H493.497V382.987H499.548V385.842H489.982ZM501.368 371.297H505.722L509.415 380.303H509.586L513.279 371.297H517.633V385.842H514.209V376.908H514.089L510.594 385.75H508.407L504.912 376.858H504.792V385.842H501.368V371.297ZM529.627 386.041C528.519 386.041 527.536 385.852 526.679 385.473C525.827 385.089 525.155 384.562 524.662 383.889C524.17 383.217 523.919 382.443 523.909 381.567H527.446C527.46 381.884 527.562 382.166 527.752 382.412C527.941 382.653 528.199 382.843 528.526 382.98C528.852 383.117 529.224 383.186 529.641 383.186C530.057 383.186 530.424 383.113 530.742 382.966C531.064 382.814 531.315 382.608 531.494 382.348C531.674 382.083 531.762 381.78 531.757 381.439C531.762 381.098 531.665 380.795 531.466 380.53C531.267 380.265 530.985 380.059 530.621 379.912C530.261 379.765 529.835 379.692 529.343 379.692H527.929V377.192H529.343C529.773 377.192 530.152 377.121 530.479 376.979C530.81 376.837 531.068 376.638 531.253 376.382C531.438 376.122 531.528 375.823 531.523 375.487C531.528 375.16 531.45 374.874 531.289 374.628C531.132 374.377 530.912 374.183 530.628 374.045C530.349 373.908 530.024 373.839 529.655 373.839C529.267 373.839 528.914 373.908 528.597 374.045C528.284 374.183 528.036 374.377 527.851 374.628C527.666 374.879 527.569 375.17 527.56 375.501H524.2C524.21 374.635 524.451 373.873 524.925 373.214C525.398 372.552 526.042 372.033 526.857 371.659C527.676 371.285 528.609 371.098 529.655 371.098C530.697 371.098 531.613 371.28 532.404 371.645C533.194 372.009 533.81 372.507 534.25 373.136C534.691 373.761 534.911 374.469 534.911 375.26C534.915 376.079 534.648 376.754 534.108 377.284C533.573 377.814 532.884 378.141 532.041 378.264V378.378C533.168 378.51 534.018 378.875 534.591 379.472C535.169 380.068 535.455 380.814 535.45 381.709C535.45 382.552 535.202 383.3 534.705 383.953C534.212 384.602 533.526 385.113 532.645 385.487C531.769 385.856 530.763 386.041 529.627 386.041Z"
				fill="#0F631C"
			/>
			<path
				id="path-01"
				d="M629.062 250.697C629.647 250.112 629.647 249.162 629.062 248.576L619.516 239.03C618.93 238.444 617.98 238.444 617.394 239.03C616.808 239.616 616.808 240.566 617.394 241.151L625.88 249.637L617.394 258.122C616.808 258.708 616.808 259.658 617.394 260.243C617.98 260.829 618.93 260.829 619.516 260.243L629.062 250.697ZM578 251.137H628.001V248.137H578V251.137Z"
				fill="currentColor"
			/>
			<path
				id="path-out"
				d="M862.062 249.697C862.647 249.112 862.647 248.162 862.062 247.576L852.516 238.03C851.93 237.444 850.98 237.444 850.394 238.03C849.808 238.616 849.808 239.566 850.394 240.151L858.88 248.637L850.394 257.122C849.808 257.708 849.808 258.658 850.394 259.243C850.98 259.829 851.93 259.829 852.516 259.243L862.062 249.697ZM811 250.137H861.001V247.137H811V250.137Z"
				fill="currentColor"
			/>
			<path
				id="path-in"
				fillRule="evenodd"
				clipRule="evenodd"
				d="M277 145.637C277 131.554 288.417 120.137 302.5 120.137H355.379L348.393 127.123C347.808 127.708 347.808 128.658 348.393 129.244C348.979 129.83 349.929 129.83 350.515 129.244L360.061 119.698C360.646 119.112 360.646 118.162 360.061 117.577L350.515 108.031C349.929 107.445 348.979 107.445 348.393 108.031C347.808 108.616 347.808 109.566 348.393 110.152L355.379 117.137L302.5 117.137C286.76 117.137 274 129.897 274 145.637L274 222.5C274 236.583 262.583 248 248.5 248L187 248L187 248.5L187 248.708L187 251L187 251.5L247.606 251.5C261.641 251.557 273 262.952 273 277V352C273 367.74 285.76 380.5 301.5 380.5H353.379L346.393 387.485C345.808 388.071 345.808 389.021 346.393 389.607C346.979 390.192 347.929 390.192 348.515 389.607L358.061 380.061C358.646 379.475 358.646 378.525 358.061 377.939L348.515 368.393C347.929 367.808 346.979 367.808 346.393 368.393C345.808 368.979 345.808 369.929 346.393 370.515L353.379 377.5H301.5C287.417 377.5 276 366.083 276 352V277C276 265.84 269.585 256.178 260.242 251.5L352.379 251.5L345.393 258.485C344.808 259.071 344.808 260.021 345.393 260.607C345.979 261.192 346.929 261.192 347.515 260.607L357.061 251.061C357.646 250.475 357.646 249.525 357.061 248.939L347.515 239.393C346.929 238.808 345.979 238.808 345.393 239.393C344.808 239.979 344.808 240.929 345.393 241.515L352.379 248.5L260.19 248.5C270.101 244.037 277 234.074 277 222.5L277 145.637Z"
				fill="currentColor"
			/>
			<path
				id="path-02"
				d="M691.5 119.342L691.5 120.842L691.5 119.342ZM718.5 146.343L720 146.343L720 146.343L718.5 146.343ZM717.439 162.697C718.025 163.283 718.975 163.283 719.56 162.697L729.106 153.151C729.692 152.566 729.692 151.616 729.106 151.03C728.521 150.444 727.571 150.444 726.985 151.03L718.5 159.515L710.015 151.03C709.429 150.444 708.479 150.444 707.893 151.03C707.307 151.616 707.307 152.566 707.893 153.151L717.439 162.697ZM580 120.842L691.5 120.842L691.5 117.842L580 117.842L580 120.842ZM717 146.342L717 161.637L720 161.637L720 146.343L717 146.342ZM691.5 120.842C705.583 120.842 717 132.259 717 146.343L720 146.343C720 130.602 707.24 117.842 691.5 117.842L691.5 120.842Z"
				fill="currentColor"
			/>
			<path
				id="path-03"
				d="M691.5 379.342L691.5 380.842L691.5 379.342ZM718.5 352.342L720 352.342L718.5 352.342ZM719.561 336.076C718.975 335.49 718.025 335.49 717.439 336.076L707.893 345.622C707.308 346.208 707.308 347.158 707.893 347.743C708.479 348.329 709.429 348.329 710.015 347.743L718.5 339.258L726.985 347.743C727.571 348.329 728.521 348.329 729.107 347.743C729.692 347.158 729.692 346.208 729.107 345.622L719.561 336.076ZM580 380.842L691.5 380.842L691.5 377.842L580 377.842L580 380.842ZM720 352.342L720 337.137L717 337.137L717 352.342L720 352.342ZM691.5 380.842C707.24 380.842 720 368.082 720 352.342L717 352.342C717 366.426 705.583 377.842 691.5 377.842L691.5 380.842Z"
				fill="currentColor"
			/>
		</svg>
	);
}
