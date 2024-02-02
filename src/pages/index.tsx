import DefaultPage from './default'
import { Main } from './style'
import BannerStatic from '../components/BannerStatic'

const Home = () => {
    return (
        <>
            <DefaultPage isHome={true}>
                <Main>
                    <BannerStatic />
                </Main>
            </DefaultPage>
        </>
    )
}

export default Home