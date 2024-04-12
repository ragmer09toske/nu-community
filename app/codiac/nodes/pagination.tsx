import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  interface TablePaginationProps {
    handleShowMore: () => void;
    handleShowLess: () => void;
  }
  
  const RsvpPagination = ({ handleShowMore, handleShowLess }: TablePaginationProps) => {
    return (
        <div className="relative">
            <div className="">
            <Pagination>
                <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious onClick={handleShowLess} />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" >
                    2
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" >3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext onClick={handleShowMore} />
                </PaginationItem>
                </PaginationContent>
            </Pagination>
            </div>
        </div>
    )
  }

export default RsvpPagination