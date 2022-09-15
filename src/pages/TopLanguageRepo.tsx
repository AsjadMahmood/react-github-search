import axios from 'axios';
import { UserSelect } from '../components/UserSelect';
import React from 'react';
import { Repository } from '../models/github-search.model'
import { Repo } from '../components/Repo';
import { Card } from 'react-bootstrap';
import { getFirstDayPreviousMonth, NormalDateFormat } from '../utils/helper-functions';
import { DateFormatter } from '../components/DateFormatter';
import { Heading } from '../components/Heading';
import { Option } from 'react-bootstrap-typeahead/types/types';

type StateType = {
  topRepos: Array<Repository>,
  language: string,
}

export class TopLanguageRepo extends React.Component {

  languageList = ['javascript', 'java', 'python', 'ruby'];
  state: StateType;
  apiUrl: string = 'https://api.github.com/search/repositories';
  lastMonthDate:string = getFirstDayPreviousMonth();


  constructor(props: any) {
    super(props);
    this.state = { topRepos: [], language: '' }; // can be intialised here or on the top
    this.onSetLanguage = this.onSetLanguage.bind(this);
  }

  async getTopLanguageRepos() {
    const results = await axios.get(`${this.apiUrl}?q=created:">=${this.lastMonthDate}"language:${this.state.language}&sort=stars&order=desc&per_page=3`)
    let repos: Repository[] = [];
    results.data.items.forEach((item: any) => {
      let obj: Repository = {
        id: item.id,
        reporUrl: item.html_url,
        repoName: item.name,
        userName: item.owner.login,
        description: item.description,
        createdAt: item.created_at,
        stars: item.stargazers_count,
        avatarUrl: item.owner.avatar_url,
        forks: item.forks,
      }
      repos.push(obj);
    })
    this.setState({
      topRepos: repos
    })
  }

  onSetLanguage = (value: Option[]) => {
    if (value.length > 0) {
      this.setState({ language: value[0] }, () => {
        this.getTopLanguageRepos();
      });
    }
  }

  render() {
    return (
      <div>
        <Heading name='Github Top Repositories'/>
        <div className='col-md-7 col-sm-10 col-sm-12 m-auto'>
          <UserSelect handleInput={this.onSetLanguage} options={this.languageList} /> <br />
          {
            this.state.language ? (
              <Card>
                <Card.Title className='mb-4'>
                  Most Stars '{this.state.language}' 
                  <span className='text-muted fst-italic'> Since (<DateFormatter date={this.lastMonthDate} format={NormalDateFormat}/>) </span>
                </Card.Title>
                {
                  this.state.topRepos.map((repo: Repository) => {
                    return (
                      <div key={repo.id}>
                        <Repo repository={repo} />
                        <br />
                      </div>
                    )
                  })
                }
              </Card>
            ) :
              <div>Type and Select a Language to see the Results </div>
          }
        </div>
      </div>
    )
  }

}