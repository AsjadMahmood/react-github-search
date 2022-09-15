import { Card, Stack } from 'react-bootstrap';
import { Repository } from '../models/github-search.model';
import { NormalDateFormat } from '../utils/helper-functions';
import { DateFormatter } from './DateFormatter';


type PropType = {
    repository: Repository
}

export function Repo(props: PropType) {

    return (
        <div className='border'>
            <Card.Body>
                <div className='row'>
                    <div className='col-md-4 col-sm-12 d-flex justify-content-center'>
                        <img width={190} height={170} src={props.repository.avatarUrl} alt="no image present" />
                    </div>
                    <div className='col-md-8 col-sm-12 p-2'>
                        <Card.Title className='mb-4'>
                            {props.repository.userName}/<b>{props.repository.repoName}</b>
                        </Card.Title>
                        <Card.Text>
                            {props.repository.description}
                        </Card.Text>

                        <div className="text-muted">
                            <span className='me-2'>Created:</span>
                            <DateFormatter date={props.repository.createdAt} format={NormalDateFormat}/>
                        </div>
                        <div className='mt-4 d-flex justify-content-between'>
                            <div style={{color:'#0d6efd',cursor:'pointer'}}>
                                <a href={props.repository.reporUrl} target="_blank">
                                <i className="fa fa-github fa-lg"></i>
                                </a>
                            </div>
                            <Stack direction="horizontal" gap={3}>
                                <i className="fa fa-star"></i>
                                <span className='ml-2 text-muted'>{props.repository.stars}</span>
                            </Stack>
                            <Stack direction="horizontal" gap={3}>
                                <i className="fa fa-code-fork"></i>
                                <span className='ml-2 text-muted'>{props.repository.forks}</span>
                            </Stack>
                        </div>
                    </div>
                </div>

            </Card.Body>

        </div>
    )
}