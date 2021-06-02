import React from 'react'

import {
  Container,
  Row,
  Card,
  CardHeader,
  Table,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Col,
  Input,
  InputGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import Link from 'next/link'

export interface DataTableProps {
  title: string
  newButton?: boolean
  newButtonLink?: string
  columns: {
    name: string
    selector: string
  }[]
  data: Record<string, string | number | JSX.Element | undefined | null>[]
  hasPreviousPage: boolean
  hasNextPage: boolean
  prevButtonAction: () => void
  nextButtonAction: () => void
  setSearchText: (text: string) => void
}

const DataTable: React.FC<DataTableProps> = ({
  title,
  newButton = false,
  newButtonLink = '#',
  columns,
  data,
  prevButtonAction,
  nextButtonAction,
  hasNextPage,
  hasPreviousPage,
  setSearchText,
}) => {
  return (
    <Container className="mt--7" fluid>
      <Row>
        <div className="col">
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row>
                <Col>
                  <h3 className="mb-0 float-left">{title}</h3>
                  {newButton && (
                    <div className="float-right">
                      <Link href={newButtonLink}>
                        <Button color="primary" size="sm">
                          Add New
                        </Button>
                      </Link>
                    </div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="float-right pt-3">
                    <InputGroup>
                      <Input
                        className="form-control border-end-0 border"
                        type="search"
                        bsSize="sm"
                        placeholder="Search..."
                        onChange={(e) => setSearchText(e.target.value)}
                        id="example-search-input"
                      />
                      <span className="input-group-append">
                        <Button
                          color="outline-secondary"
                          className="bg-white border-start-0 border-bottom-0 border ms-n5"
                          type="button"
                          size="sm"
                        >
                          <i className="fa fa-search"></i>
                        </Button>
                      </span>
                    </InputGroup>
                  </div>
                </Col>
              </Row>
            </CardHeader>
            <Table className="align-items-center table-flush" responsive>
              <thead className="thead-light">
                <tr>
                  {columns.map((column, key) => (
                    <th scope="col" key={key}>
                      {column.name}
                    </th>
                  ))}
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>
                {data.map((d, k1) => (
                  <tr key={k1}>
                    {columns.map((column, k2) => (
                      <td key={k2}>{d[column.selector]}</td>
                    ))}
                    <td className="text-right">
                      <UncontrolledDropdown>
                        <DropdownToggle
                          className="btn-icon-only text-light"
                          href="#pablo"
                          role="button"
                          size="sm"
                          color=""
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fas fa-ellipsis-v" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            View Details
                          </DropdownItem>
                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Edit
                          </DropdownItem>
                          <DropdownItem href="#pablo" onClick={(e) => e.preventDefault()}>
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <CardFooter className="py-4">
              <nav aria-label="...">
                <Pagination
                  className="pagination justify-content-end mb-0"
                  listClassName="justify-content-end mb-0"
                >
                  <PaginationItem className={hasPreviousPage ? '' : 'disabled'}>
                    <PaginationLink href="#prev" onClick={prevButtonAction} tabIndex={-1}>
                      <i className="fas fa-angle-left" />
                      <span className="sr-only">Previous</span>
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem className={hasNextPage ? '' : 'disabled'}>
                    <PaginationLink href="#next" onClick={nextButtonAction}>
                      <i className="fas fa-angle-right" />
                      <span className="sr-only">Next</span>
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </nav>
            </CardFooter>
          </Card>
        </div>
      </Row>
    </Container>
  )
}

export default DataTable
