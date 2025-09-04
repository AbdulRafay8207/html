import {
  Grid,
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from '@mui/material'
// import { useContext } from 'react'
// import { SiteContext } from '../context/SiteContext'
import { useSiteContext } from '../context/siteContextProvider'

const Home = () => {
  // const {siteList} = useContext(SiteContext)
  const {siteList,setSiteList} = useSiteContext()

  const handleDelete = (id:number)=>{
       const del = siteList.filter((item)=>(item.id !== id))
       setSiteList(del)
    }
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {siteList.map((item) => (
          <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  DA: {item.da}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  URL:{' '}
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.url}
                  </a>
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Contact: {item.contact}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={()=> handleDelete(item)} variant='contained' color="error">
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Home
