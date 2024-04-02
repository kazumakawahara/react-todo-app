import { useState } from "react";
import ReactPaginate from "react-paginate";
import AlbumList from "./AlbumList.tsx";
import "./Pagination.css";
import type Album from "./type.tsx";

type Props = {
	albums: Album[];
};

const Pagination = (props: Props) => {
	const { albums } = props;

	// ページのアイテム表示数
	const itemPerPage = 6;

	const [itemsOffset, setItemsOffset] = useState(0);

	const endOffset = itemsOffset + itemPerPage;

	const currentAlbums = albums.slice(itemsOffset, endOffset);

	const pageCount = Math.ceil(albums.length / itemPerPage);

	const handlePageClick = (e: { selected: number }) => {
		const newOffset = (e.selected * itemPerPage) % albums.length;
		setItemsOffset(newOffset);
	};

	return (
		<div className="albumWrapper">
			<AlbumList albums={albums} currentAlbums={currentAlbums} />
			<div className="paginateWrapper">
				<ReactPaginate
					nextLabel="next >"
					onPageChange={handlePageClick}
					pageRangeDisplayed={3}
					marginPagesDisplayed={2}
					pageCount={pageCount}
					previousLabel="< previous"
					pageClassName="page-item"
					pageLinkClassName="page-link"
					previousClassName="page-item"
					previousLinkClassName="page-link"
					nextClassName="page-item"
					nextLinkClassName="page-link"
					breakLabel="..."
					breakClassName="page-item"
					breakLinkClassName="page-link"
					containerClassName="pagination"
					activeClassName="active"
					renderOnZeroPageCount={null}
				/>
			</div>
		</div>
	);
};

export default Pagination;
