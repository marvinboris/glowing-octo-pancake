import React, { useState } from 'react';
import { Col, Table, Button, Input, Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faFileExcel, faFilePdf, faFileCsv, faPrint, faAngleDoubleLeft, faChevronLeft, faChevronRight, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import jsxToString from 'jsx-to-string';

import { updateObject } from '../../../../shared/utility';

let timeout;

export default ({ fields, array, loading = false, get, total = 0, data, limit, bordered, xs = 12, sm = 12, md = 12, lg = 12, xl = 12, icon, title, add, link, className = '', dark, borderless, innerClassName = '', outerClassName = '', p0, select, children, selectHandler, style }) => {
    const titles = fields.map(({ name, fixed }) => <th className="align-middle text-nowrap bg-soft" style={fixed ? { position: 'sticky', right: 0 } : {}} key={name}>{name}</th>);
    titles.unshift(<th className="text-center align-middle" key="#">SL</th>);
    if (select) titles.unshift(<th className="align-middle text-center" key="select_all">
        <input type="checkbox" onClick={selectHandler} className="select_all" />
    </th>);

    const [show, setShow] = useState(10);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [pageFirst, setPageFirst] = useState(1);
    const [pageSecond, setPageSecond] = useState(2);
    const [pageLast, setPageLast] = useState(3);

    const filteredArray = array;
    const limitedArray = filteredArray;

    const pageNumber = Math.ceil(total / show);

    const content = limitedArray.map((item, index) => {
        if (limit && index >= limit) return null;
        let inside = [<th className="text-center align-middle" key={'primary' + index}>{(show === 'All' ? 0 : (page - 1) * show) + index + 1}</th>];
        if (select) inside.unshift(<th className="text-center align-middle" key={'secondary' + index}>
            <input type="checkbox" value={item._id} />
        </th>);
        fields.forEach(({ key, minWidth, fixed }) => {
            inside.push(<td className="align-middle text-nowrap" style={updateObject({ minWidth, borderColor: '#DEE2E6' }, fixed ? { position: 'sticky', right: 0, backgroundColor: '#F4F4F4' } : {})} key={key}>{item[key]}</td>);
        });

        return <tr className="align-middle" key={index + 1}>{inside}</tr>;
    });

    const inputChangedHandler = e => {
        const { name, value } = e.target;
        firstPageHandler();
        if (name === 'show') {
            get(page, value, search);
            return setShow(value);
        }
        if (name === 'search') {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                get(page, show, value);
                clearTimeout(timeout);
            }, 1000);
            return setSearch(value);
        }
    }

    const previousPageHandler = () => {
        if (page <= 1) return;
        pageChangeHandler(page - 1);
    }

    const nextPageHandler = () => {
        const lastPage = pageNumber;
        if (page >= lastPage) return;
        pageChangeHandler(page + 1);
    }

    const firstPageHandler = () => {
        if (page <= 1) return;
        pageChangeHandler(1);
    }

    const lastPageHandler = () => {
        const lastPage = pageNumber;
        if (page >= lastPage) return;
        pageChangeHandler(lastPage);
    }

    const pageChangeHandler = page => {
        const lastPage = pageNumber;
        let pageFirst;
        if (page === 1) pageFirst = 1;
        else if (page === lastPage) pageFirst = lastPage - 2;
        else pageFirst = page - 1;
        get(page, show, search);
        setPage(page);
        setPageFirst(pageFirst);
        setPageSecond(pageFirst + 1);
        setPageLast(pageFirst + 2);
    }

    const onClick = e => {
        e.preventDefault();

        const url = e.target.href;
        exportData(url);
    };

    const exportData = async url => {
        const format = url.split('/')[url.split('/').length - 1];
        const name = title + '.' + format;
        const token = localStorage.getItem('token');

        try {
            const formData = new FormData();

            formData.append('data', data);
            formData.append('name', name);

            const res = await fetch(url, {
                method: 'POST',
                mode: 'cors',
                body: formData,
                headers: {
                    Authorization: token
                }
            });

            const resData = await res.blob();

            const downloadLink = URL.createObjectURL(resData);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = downloadLink;
            a.download = name;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(downloadLink);
        } catch (err) {
            console.log(err)
        }
    }

    const modulo = total % show;
    const entries = total === 0 ? total : (modulo !== 0 ? modulo : show);

    return (
        <Col xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={outerClassName}>
            <input type="hidden" id="table-show" value={show} />
            <input type="hidden" id="table-page" value={page} />
            <input type="hidden" id="table-search" value={search} />

            <div className={`rounded-4 d-flex justify-content-between align-items-center mb-5 mt-3 py-4 px-4 text-large bg-orange-10 ${className}`}>
                <span className="d-inline-flex align-items-center text-700 text-brown">{icon ? <FontAwesomeIcon fixedWidth className="mr-2" icon={icon} size="lg" /> : null}<span className="text-dark">{title}</span></span>

                {add ? <Link to={link}>
                    <Button color="orange" size="lg" className="rounded-2">
                        <FontAwesomeIcon icon={faPlusCircle} fixedWidth className="mr-2" />
                        {add}
                    </Button>
                </Link> : null}
            </div>

            <div className={"d-flex flex-column " + (dark ? "text-light " : " ") + className} style={style}>
                <div className="p-4 border-bottom border-soft text-orange text-700 position-relative">
                    <Row className="align-items-center justify-content-between">
                        <div className="col-6 pb-2 pb-lg-0 col-lg-2">
                            <div className="d-flex align-items-center text-secondary rounded-2">
                                <div className="px-3 py-2 font-weight-bold h-100 border-bottom border-soft bg-soft">Afficher</div>
                                <Input type="select" name="show" onChange={inputChangedHandler} className="px-3 py-2 text-center rounded-0 h-100 d-block text-reset border-top-0 border-right-0 border-bottom-0 border-black-20 bg-soft" style={{ width: '5rem' }}>
                                    <option value="10">10</option>
                                    <option value="25">25</option>
                                    <option value="50">50</option>
                                    <option value="100">100</option>
                                    <option value="All">Toutes</option>
                                </Input>
                            </div>
                        </div>

                        <div className="col-6 d-lg-none pb-2 pb-lg-0">
                            <Input type="search" name="search" onChange={inputChangedHandler} className="bg-soft border-0 rounded-2" placeholder="Search..." />
                        </div>

                        <div className="col-lg-4 pb-2 pb-lg-0 rounded-2 overflow-hidden">
                            <div className="bg-soft d-flex text-secondary justify-content-around align-items-center font-weight-bold py-3">
                                <a href="/api/export/xlsx" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faFileExcel} className="text-darkblue mr-2" />Excel</a>
                                <a href="/api/export/pdf" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faFilePdf} className="text-danger mr-2" />PDF</a>
                                <a href="/api/export/csv" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faFileCsv} className="text-green mr-2" />CSV</a>
                                <a href="/api/export/pdf" onClick={onClick} className="px-2 export text-decoration-none text-reset"><FontAwesomeIcon icon={faPrint} className="text-primary mr-2" />Imprimer</a>
                            </div>
                        </div>

                        <div className="col-lg-2 d-none d-lg-block">
                            <Input type="search" name="search" onChange={inputChangedHandler} className="bg-soft border-0 rounded-2" placeholder="Rechercher..." />
                        </div>
                    </Row>
                </div>

                <div className={"flex-fill d-flex flex-column " + (!p0 ? "p-4" : "p-0")}>
                    <div className="table-responsive flex-fill">
                        <Table dark={dark} bordered={bordered} hover borderless={borderless} className={innerClassName}>
                            <thead className="bg-soft text-secondary"><tr>{titles}</tr></thead>
                            <tbody className="bg-soft-50 text-secondary">{!loading && content}</tbody>
                        </Table>
                    </div>

                    {loading && <Col xs={12} className="text-center">
                        <div className="text-center py-3">En cours...</div>
                    </Col>}

                    <div>
                        {children}
                    </div>

                    <div>
                        <div>Affichage de {((+page !== pageNumber) && (+page > 1)) ? show : entries} sur {total} entrée{total > 1 && 's'}.</div>

                        <div className="pt-2 d-flex justify-content-end">
                            {show === 'All' ? null : <ul className="pagination btn-group">
                                {page === 1 ? null :
                                    <>
                                        <li className="btn btn-yellow" onClick={firstPageHandler}><FontAwesomeIcon icon={faAngleDoubleLeft} className="mr-2" />Première</li>
                                        <li className="btn btn-darkblue text-secondary" onClick={(previousPageHandler)}><FontAwesomeIcon icon={faChevronLeft} /></li>
                                    </>
                                }
                                <li className={"btn btn-darkblue " + (page === pageFirst ? 'text-700 active' : 'secondary')} onClick={() => pageChangeHandler(pageFirst)}>{pageFirst}</li>
                                {pageNumber > 1 ?
                                    <>
                                        <li className={"btn btn-darkblue " + (page === pageSecond ? 'text-700 active' : 'secondary')} onClick={() => pageChangeHandler(pageSecond)}>{pageSecond}</li>
                                        {pageNumber > 2 ?
                                            <li className={"btn btn-darkblue " + (page === pageLast ? 'text-700 active' : 'secondary')} onClick={() => pageChangeHandler(pageLast)}>{pageLast}</li>
                                            : null}
                                        {page === pageNumber ? null :
                                            <>
                                                <li className="btn btn-darkblue text-secondary" onClick={nextPageHandler}><FontAwesomeIcon icon={faChevronRight} /></li>
                                                <li className="btn btn-myprimary" onClick={lastPageHandler}>Dernière<FontAwesomeIcon icon={faAngleDoubleRight} className="ml-2" /></li>
                                            </>
                                        }
                                    </>
                                    : null}
                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    );
};