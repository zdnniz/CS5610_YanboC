import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheck from "./GreenCheck";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({ assignmentId, deleteAssignment }:
  { assignmentId: string; deleteAssignment: (moduleId: string) => void; }) {

  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={() => { const confirmed = window.confirm("Are you sure you want to remove this assignment?");
    if (confirmed) {
      deleteAssignment(assignmentId);
    } }} />
      <GreenCheck />
      <IoEllipsisVertical className="fs-4" />
    </div>);
}

